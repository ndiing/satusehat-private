const sqlite3 = require("sqlite3").verbose();
const { promisify } = require("util");
const fs = require("fs");

class Address {
    // use
    // line
    // city
    // postalCode
    // country
    // administrativeCode
    // extension=[
    //     {url,extension:[
    //         {url,valueCode},
    //     ]}
    // ]

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
        return this.db.run(`CREATE TABLE IF NOT EXISTS address (
            use TEXT PRIMARY KEY,
            line TEXT,
            city TEXT,
            postalCode TEXT,
            country TEXT,
            administrativeCode TEXT
        );
        `);
    }

    insert(data={}) {
        const { use, line, city, postalCode, country, administrativeCode } = data;
        return this.db.run(
            `INSERT INTO address (use, line, city, postalCode, country, administrativeCode)
            VALUES (?, ?, ?, ?, ?, ?);
            `,
            [use, line, city, postalCode, country, administrativeCode]
        );
    }
    async select(data={}) {
        const {use}=data
        const rows= await this.db.all(`SELECT *
        FROM address
        ${use?`WHERE use = ?`:''};
        `,[use]);
        return rows.map(row=>{
            row.line=[].concat(row.line)
            const administrativeCode = (row.administrativeCode??'').split('')

            row.extension=[
                {
                    url:'https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode',
                    extension:[
                        {url:'province',valueCode:administrativeCode.slice(10-2).join('')},
                        {url:'city',valueCode:administrativeCode.slice(10-4).join('')},
                        {url:'district',valueCode:administrativeCode.slice(10-7).join('')},
                        {url:'village',valueCode:administrativeCode.slice(0).join('')},
                    ]
                }
            ]

            delete row.administrativeCode
            return row
        })
    }
    update(data={}) {
        const { use, line, city, postalCode, country, administrativeCode } = data;
        return this.db.run(
            `UPDATE address
            SET 
                use = ?,
                line = ?,
                city = ?,
                postalCode = ?,
                country = ?,
                administrativeCode = ?
            WHERE use = ?;
            `,
            [use, line, city, postalCode, country, administrativeCode, use]
        );
    }
    delete(data={}) {
        const { use } = data;
        return this.db.run(
            `DELETE FROM address
            WHERE use = ?;
            `,
            [use]
        );
    }

    destroy() {}
}

module.exports = Address;

// const address = new Address()

// address.insert({
//     "use": "work",
//     "line": 
//         "Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan"
//     ,
//     "city": "Jakarta",
//     "postalCode": "12950",
//     "country": "ID",
//     "administrativeCode": "1010101101",
// }).then(console.log).catch(console.log)
// address.select().then(res=>{
//     console.log(JSON.stringify(res))
// }).catch(console.log)