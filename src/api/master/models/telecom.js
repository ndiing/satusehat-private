const sqlite3 = require("sqlite3").verbose();
const { promisify } = require("util");
const fs = require("fs");

class Telecom {
    // system
    // value
    // use

    constructor() {
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

        this.db.serialize()

        this.init();
    }

    init() {
        return this.db.run(`CREATE TABLE IF NOT EXISTS telecom (
            system TEXT,
            value TEXT,
            use TEXT,
            PRIMARY KEY (system, value)
        );
        `);
    }

    insert(data={}) {
        const { system, value, use } = data;
        return this.db.run(
            `INSERT INTO telecom (system, value, use)
        VALUES (?, ?, ?);
        `,
            [system, value, use]
        );
    }
    select(data={}) {
        return this.db.all(`SELECT *
        FROM telecom;
        `);
    }
    update(data={}) {
        const { system, value, use } = data;
        return this.db.run(
            `UPDATE telecom
        SET system = ?, value = ?, use = ?
        WHERE system = ? AND value = ?;
        `,
            [system, value, use, system, value]
        );
    }
    delete(data={}) {
        const { system, value } = data;
        console.log(system, value)
        return this.db.run(
            `DELETE FROM telecom
        WHERE system = ? AND value = ?;
        `,
            [system, value]
        );
    }

    destroy() {}
}

module.exports = Telecom;

// const telecom = new Telecom()
// telecom.insert({
//     "system": "phone",
//     "value": "2328",
//     "use": "work"
// }).then(console.log).catch(console.log)
// telecom.insert({
//     "system": "fax",
//     "value": "2329",
//     "use": "work"
// }).then(console.log).catch(console.log)
// telecom.insert({
//     "system": "email",
//     "value": "second wing admissions"
// }).then(console.log).catch(console.log)
// telecom.insert({
//     "system": "url",
//     "value": "http://sampleorg.com/southwing",
//     "use": "work"
// }).then(console.log).catch(console.log)
// telecom.select().then(console.log).catch(console.log)
