const sqlite3 = require("sqlite3").verbose();
const { promisify } = require("util");
const fs = require("fs");

class DB {
    constructor(name) {
        this.name = name;

        try {
            fs.readdirSync("./data");
        } catch (error) {
            fs.mkdirSync("./data", {
                recursive: true,
            });
        }

        this.db = new sqlite3.Database("./data/database.db");

        this.db.run = promisify(this.db.run);
        this.db.get = promisify(this.db.get);
        this.db.all = promisify(this.db.all);

        this.db.serialize();

        this.init();
    }

    init() {
        this.db.run(
            `CREATE TABLE IF NOT EXISTS ${this.name} (
                _id TEXT PRIMARY KEY,
                doc TEXT,
                _rev TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );`
        );
    }

    put(doc) {
        return this.db.run(
            `INSERT INTO ${this.name} (_id, doc)
        VALUES (?, ?)
        ON CONFLICT(_id) DO UPDATE SET
            doc = excluded.doc;`,
            [doc._id, JSON.stringify(doc)]
        );
    }
    async get(_id) {
        const res = await this.db.get(
            `SELECT *
        FROM ${this.name}
        WHERE _id = ?;`,
            [_id]
        );
        if (res) {
            return { _id: res._id, _rev: res._rev, ...JSON.parse(res.doc) };
        }
        return res;
    }
    post(doc) {
        return this.db.run(
            `INSERT INTO ${this.name} (_id, doc)
        VALUES (?, ?);`,
            [doc._id, JSON.stringify(doc)]
        );
    }
    remove(_id) {
        return this.db.run(
            `DELETE FROM ${this.name}
        WHERE _id = ?;`,
            [_id]
        );
    }
    async allDocs(options = {}) {
        const row = await this.db.get(
            `SELECT COUNT(*) AS total
        FROM ${this.name};`
        );
        const rows = await this.db.all(
            `SELECT *
        FROM ${this.name}
        ORDER BY _rev DESC
        LIMIT ? OFFSET ?;`,
            [options.limit ?? 5000, options.offset ?? 0]
        );
        return {
            ...options,
            ...row,
            rows: rows.map((row) => ({ _id: row._id, _rev: row._rev, ...JSON.parse(row.doc) })),
        };
    }

    destroy() {
        return this.db.run(`DROP TABLE IF EXISTS ${this.name};`);
    }
}

// const db = new DB("example");

// db.put({ _id: "1", user: "name", pass: "word" }).then(console.log).catch(console.error);
// db.get("1").then(console.log).catch(console.error);

// db.post({ _id: "2", user: "name", pass: "word" }).then(console.log).catch(console.error);

// // db.get("1").then(console.log).catch(console.error);
// // db.get("2").then(console.log).catch(console.error);

// // db.remove("2").then(console.log).catch(console.error);
// // db.get("1").then(console.log).catch(console.error);
// // db.get("2").then(console.log).catch(console.error);

// db.allDocs({ limit: 10, offset: 0 }).then(console.log).catch(console.error);

// db.destroy().then(console.log).catch(console.error);

module.exports = DB;
