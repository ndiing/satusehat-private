let fs = require("fs");
const { flatten } = require("../lib/helper");

let environment = require("./satusehat-public/SATUSEHAT Production.postman_environment.json");


let env = Object.fromEntries(environment.values.map(({ key, value }) => [key, value]));
// env.Org_id = "";
// console.log(env)

console.log(
    JSON.stringify(env, null, 4)
        .replace(/[\{\}]/g, "")
        .replace(/^\s+/gm, "")
);

function toCamelCase(string) {
    return string
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2, $0) => {
            return $0 == 0 ? $2.toLowerCase() : $2.toUpperCase();
        })
        .replace(/([^a-zA-Z0-9])/g, "");
}

function toPascalCase(string) {
    return string
        .replace(/(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g, ($, $1, $2, $0) => {
            return $2.toUpperCase();
        })
        .replace(/([^a-zA-Z0-9])/g, "");
}

function toKebabCase(string) {
    return string
        .replace(/[^a-zA-Z0-9]/g, "")
        .replace(/([a-z])([A-Z])/g, ($, $1, $2) => {
            return $1 + "-" + $2;
        })
        .toLowerCase();
}

let data = require("./satusehat-public/00. FHIR Resource - Contoh Penggunaan.postman_collection.json");


let group = {};
let group2 = {};
let resources = {};
let blacklist = {};
let mapMethods = {};
let code = "";

for (let item of data.item) {
    // console.log(item.name)

    for (let item2 of item.item) {
        const names = [item.name, item2.name];

        if (item2?.item) {
            for (let item3 of item2?.item ?? []) {
                parseItem3(item3, names.concat(item3.name));
            }
        } else {
            parseItem3(item2, names);
        }
    }
}
function parseItem3(item3, names) {
    let { name, request } = item3;
    let { method, header, body, url, auth: { type } = {} } = request || {};
    let { mode, raw, urlencoded, options: { raw: { language } = {} } = {} } = body || {};
    let { raw: rawUrl = "", query, variable = [] } = url || {};

    rawUrl = rawUrl.replace(/\?[^\?]+/, "");
    urlencoded = (urlencoded && Object.fromEntries(urlencoded.map(({ key, value }) => [key, value]))) || {};
    variable = (variable && Object.fromEntries(variable.map(({ key, value }) => [key, value]))) || {};
    query = (query && Object.fromEntries(query.map(({ key, value }) => [key, value]))) || {};
    header = (header && Object.fromEntries(header.map(({ key, value }) => [key, value]))) || {};

    if (type !== "noauth") {
        header["Authorization"] = "Bearer {{token}}";
    }

    let rawBody = raw;
    if (mode == "urlencoded") {
        if (!(header["Content-type"] || header["content-type"] || header["Content-Type"])) {
            header["Content-type"] = "application/x-www-form-urlencoded";
        }
        rawBody = urlencoded;
    } else if (mode == "raw") {
        if (!(header["Content-type"] || header["content-type"] || header["Content-Type"])) {
            header["Content-type"] = "application/json";
        }
        try {
            rawBody = JSON.parse(rawBody);
        } catch (error) {}
    }

    if (method == "GET" || method == "DELETE") {
        rawBody = undefined;
        delete header["Content-type"];
        delete header["Content-Type"];
        delete header["content-type"];
    }

    if (rawUrl.match(/:\w+/)) {
        // console.log(JSON.stringify(request,null,4))
    }

    // console.log(request)
    const named = names.length == 2 ? names[0] : names[1];
    const className = toPascalCase(named);
    let methodName = toCamelCase(name.replace(named, ""));

    if (/^(create|read|update|delete|post|put|patch|get|remove)$/i.test(methodName)) {
        methodName = methodName.toLowerCase();
    }

    const fileName = toKebabCase(named);

    resources[fileName] = {
        named,
        className,
        name,
        methodName,
        // methodName2,
        request: [
            rawUrl,
            {
                query,
                method,
                headers: header,
                body: rawBody,
            },
        ],
    };

    if (rawUrl) {
        let methodName2 = toCamelCase([method.toLowerCase()].concat(Object.keys(variable)).join());

        if (!mapMethods[fileName]) {
            mapMethods[fileName] = {};
        }
        mapMethods[fileName][methodName] = methodName2;

        // if (!blacklist[fileName]) {
        //     blacklist[fileName] = [];
        // }
        // if (blacklist[fileName].includes(rawUrl)) {
        //     return;
        // }
        // blacklist[fileName].push(rawUrl);

        if (!group[fileName]) {
            group[fileName] = "";
        }

        rawUrl = rawUrl.replace(/\{\{\w+\}\}/, "http://localhost:3000/api/satusehat");
        delete header["Authorization"];

        group[fileName] += `### ${name}\r\n`;
        group[fileName] += `${method} ${rawUrl}`;
        if (Object.keys(query).length) {
            const queryString = [];
            for (const name in query) {
                const value = query[name];
                queryString.push([name, value].join("="));
            }
            group[fileName] += `?${queryString.join("&")}`;
        }
        group[fileName] += `\r\n`;
        for (const name in header) {
            const value = header[name];
            group[fileName] += `${name}: ${value}\r\n`;
        }
        if (rawBody) {
            group[fileName] += `\r\n`;
            if (mode == "urlencoded") {
                group[fileName] += `${new URLSearchParams(rawBody).toString()}\r\n`;
            } else if (mode == "raw") {
                let body=JSON.stringify(flatten(rawBody),null,4)
                .replace(/"(resourceType|telecom.*?|address.*?|.*?system)": .*?\n/gm,'')
                .replace(/ {4,}"/gm,'    "')
            
                group[fileName] += `${body}\r\n`;

                // console.log(JSON.parse(body))
            }
        }
        group[fileName] += `\r\n`;
    }
}

let code2 = "";
for (const fileName in group) {
    const {
        named,
        className,
        name,
        methodName,
        request = [
            rawUrl,
            {
                query,
                method,
                headers,
                body,
            },
        ],
    } = resources[fileName];
    // code2+=(`const ${className} = require("./controllers/${fileName}.js");\r\n`)

    // console.log(group[fileName]);
    let code = "";

    for (const [, variable] of group[fileName].matchAll(/\{\{([^\}]+)\}\}/g)) {
        if (!Object.keys(env).includes(variable) && !code.includes(variable)) {
            code += `@${variable}=\r\n`;
        }
    }
    code += `\r\n`;

    code += group[fileName];

    // fs.writeFileSync(`./rest/satusehat-private/${fileName}.http`,code)
    fs.writeFileSync(`./rest/satusehat-mapping/${fileName}.http`,code)
}

// console.log(code2)
// console.log(mapMethods)
