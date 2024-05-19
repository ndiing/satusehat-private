process.on("uncaughtException", console.log);
process.on("unhandledRejection", console.log);

require("./lib/env");

const { Readable } = require("stream");
const zlib = require("zlib");
const express = require("express");

try {
    // require('./lib')
    require("./dev");
} catch (error) {}

const app = express();

app.use(async (req, res, next) => {
    try {
        res.removeHeader("X-Powered-By");

        const { method } = req;

        if (["POST", "PUT", "PATCH"].includes(method)) {
            const buffer = [];
            for await (const chunk of req) {
                buffer.push(chunk);
            }

            const body = Buffer.concat(buffer);

            const contentType = req.headers["content-type"] || "";

            if (contentType.includes("json")) {
                req.body = JSON.parse(body);
            } else if (contentType.includes("urlencoded")) {
                req.body = Object.fromEntries(new URLSearchParams(body.toString()).entries());
            }
        }

        res.headers = {
            // "Content-Security-Policy": "default-src 'self'; script-src 'self' https://trusted.cdn.com",
            "Content-Security-Policy": "default-src 'self'",
            "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "Referrer-Policy": "no-referrer",
            "Permissions-Policy": "geolocation=(self), microphone=()",
            "X-XSS-Protection": "1; mode=block",

            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Origin": "https://example.com",
            // "Access-Control-Allow-Methods": "GET, POST, PUT",
            // "Access-Control-Allow-Headers": "Content-Type, Authorization",
            // "Access-Control-Allow-Credentials": "true",
            // "Access-Control-Expose-Headers": "Content-Length, X-Kuma-Revision",
            // "Access-Control-Max-Age": "600"
        };

        const send = res.send;

        res.send = (body) => {
            if (!(body instanceof Readable)) {
                const readable = new Readable();
                readable.push(body);
                readable.push(null);
                body = readable;
            }

            const acceptEncoding = req.headers["accept-encoding"] || "";
            switch (true) {
                case /\bgzip\b/.test(acceptEncoding):
                    res.headers["Content-Encoding"] = "gzip";
                    body = body.pipe(zlib.createGzip());
                    break;
                case /\bdeflate\b/.test(acceptEncoding):
                    res.headers["Content-Encoding"] = "deflate";
                    body = body.pipe(zlib.createDeflate());
                    break;
                case /\bbr\b/.test(acceptEncoding):
                    res.headers["Content-Encoding"] = "br";
                    body = body.pipe(zlib.createBrotliCompress());
                    break;
                default:
                    break;
            }

            res.writeHead(res.statusCode, Object.fromEntries(Object.entries(res.headers)));
            body.pipe(res);
        };

        next();
    } catch (error) {
        next(error);
    }
});

app.use("/api", require("./api"));

app.use((req, res, next) => {
    res.status(404);
    next(new Error("Not Found"));
});

app.use((err, req, res, next) => {
    err = JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)));

    if (res.statusCode >= 200 && res.statusCode < 300) {
        res.status(500);
    }

    res.json(err);
});

const port = Number(process.env.port);
const server = app.listen(port, "0.0.0.0", () => {
    console.log(server.address());
});
