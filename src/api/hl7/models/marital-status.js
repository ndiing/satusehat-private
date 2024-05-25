const DB = require("../../../lib/sqlite");

class MaritalStatus extends DB {
    constructor() {
        super("MaritalStatus");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "A",
                    "display": "Annulled",
                    "definition": "Marriage contract has been declared null and to not have existed"
                },
                {
                    "code": "D",
                    "display": "Divorced",
                    "definition": "Marriage contract has been declared dissolved and inactive"
                },
                {
                    "code": "I",
                    "display": "Interlocutory",
                    "definition": "Subject to an Interlocutory Decree."
                },
                {
                    "code": "M",
                    "display": "Married",
                    "definition": "A current marriage contract is active"
                },
                {
                    "code": "C",
                    "display": "Common Law",
                    "definition": "a marriage recognized in some jurisdictions and based on the parties' agreement to consider themselves married and can also be based on documentation of cohabitation.\r\n\r\nThis definition was based on https://www.merriam-webster.com/dictionary/common-law%20marriage."
                },
                {
                    "code": "P",
                    "display": "Polygamous",
                    "definition": "More than 1 current spouse"
                },
                {
                    "code": "T",
                    "display": "Domestic partner",
                    "definition": "Person declares that a domestic partner relationship exists."
                },
                {
                    "code": "U",
                    "display": "unmarried",
                    "definition": "Currently not in a marriage contract."
                },
                {
                    "code": "S",
                    "display": "Never Married",
                    "definition": "No marriage contract has ever been entered"
                },
                {
                    "code": "W",
                    "display": "Widowed",
                    "definition": "The spouse has died"
                }
            ];
            for (const doc of docs) {
                doc._id=doc.code;
                await this.put(doc);
            }
        }

        return Promise.resolve();
    }
}

module.exports = MaritalStatus;
