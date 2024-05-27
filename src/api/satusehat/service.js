// Importing ProxyAgent from undici library
const { ProxyAgent } = require("undici");
// Importing crypto module for generating UUIDs
const crypto = require("crypto");
// Importing SQLite library
const DB = require("../../lib/sqlite");

// Setting environment variables for API endpoints
process.env.auth_url = "https://api-satusehat.kemkes.go.id/oauth2/v1";
process.env.base_url = "https://api-satusehat.kemkes.go.id/fhir-r4/v1";
process.env.consent_url = "https://api-satusehat.kemkes.go.id/consent/v1";

// Service class for handling API requests
class Service {
    constructor(options = {}) {
        const { storage } = options;
        this.storage = storage;
        // Initializing SQLite database for logging
        this.log = new DB("log");
    }

    async fetch(input, init = {}) {
        let { credentials = "include", params = {}, query = {}, headers = {}, body } = init;

        // Replacing dynamic placeholders in input URL with corresponding environment variables or storage values
        input = input?.replace(/\{\{([^\}]+)\}\}/g, ($, $1) => {
            return process.env?.[$1] || this.storage?.[$1];
        });

        // Replacing dynamic placeholders in input URL params with corresponding values
        input = input?.replace(/\:(\w+)/g, ($, $1) => {
            return params[$1];
        });

        const url = new URL(input);

        // Appending query parameters to URL
        for (const name in query) {
            const value = query[name]?.replace(/\{\{([^\}]+)\}\}/g, ($, $1) => {
                return process.env?.[$1] || this.storage?.[$1];
            });
            url.searchParams.set(name, value);
        }

        input = url.toString();

        // Replacing dynamic placeholders in headers with corresponding environment variables or storage values
        const newHeaders={}
        for (const name in headers) {
            const value = headers[name];
            newHeaders[name.toLowerCase()]=(value?.replace(/\{\{([^\}]+)\}\}/g, ($, $1) => {
                return process.env?.[$1] || this.storage?.[$1];
            }));
        }
        headers=newHeaders

        // Replacing dynamic placeholders in request body with corresponding environment variables or storage values
        if (body) {
            body = body?.replace(/\{\{([^\}]+)\}\}/g, ($, $1) => {
                return process.env?.[$1] || this.storage?.[$1];
            });
        }

        let dispatcher;
        // Setting up proxy if in development environment and proxy is defined in environment variables
        if (process.env.proxy) {
            // Disabling TLS certificate verification (not recommended for production)
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
            dispatcher = new ProxyAgent(process.env.proxy);
        }

        // Adding cookie to headers if credentials are set to "include" and cookie is available in storage
        const cookie = this.storage.cookieStore.cookie;
        if (credentials == "include" && cookie) {
            headers["Cookie"] = cookie;
        }

        let text;
        let params2;
        const mimeType = headers?.[Object.keys(headers).find((key) => /^Content-Type$/i.test(key))];
        if (body) {
            if (mimeType?.includes("json")) {
                try {
                    text = JSON.parse(body);
                } catch (error) {}
            } else if (mimeType?.includes("urlencoded")) {
                try {
                    params = new URLSearchParams(body).entries().map(([name, value]) => ({ name, value }));
                } catch (error) {}
            }
        }

        // Constructing request object for logging
        const request = {
            method: init.method,
            url: input,
            postData: {
                mimeType,
                params: params2,
                text,
            },
        };

        // // remove it later
        // // stop before request
        // // in development stage
        // return {
        //     json:() => {
        //         try {
        //             return JSON.parse(body)
        //         } catch (error) {
        //             return body
        //         }
        //     }
        // }

        const doc = {
            // Generating UUID for log entry
            _id: crypto.randomUUID(),
            request,
        };
        // Logging the request
        this.log.put(doc);
        // .then(console.log)
        // .catch(console.error)

        // Sending request and receiving response
        const res = await fetch(input, {
            dispatcher,
            ...init,
            method: init.method,
            headers,
            ...(body && { body }),
        });

        // Extracting and storing cookie from response headers
        const setCookie = res.headers.getSetCookie();
        this.storage.cookieStore.cookie = setCookie;

        // Cloning response for logging and processing response body
        const res2 = res.clone();
        const mimeType2 = res2.headers.get("Content-Type");
        res2.text().then((text) => {
            const response = {
                status: res2.status,
                statusText: res2.statusText,
                content: {
                    mimeType: mimeType2,
                    text,
                },
            };
            // Adding response to log entry
            doc.response = response;
            // Logging the response
            this.log.put(doc);
            // .then(console.log)
            // .catch(console.error)
        });

        // Returning the original response
        return res;
    }
}

// Exporting the Service class
module.exports = Service;
