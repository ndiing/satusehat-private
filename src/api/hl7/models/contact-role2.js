const DB = require("../../../lib/sqlite");

class ContactRole2 extends DB {
    constructor() {
        super("ContactRole2");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "BP",
                    "display": "Billing contact person",
                    "definition": "Billing contact person"
                },
                {
                    "code": "CP",
                    "display": "Contact person",
                    "definition": "Contact person"
                },
                {
                    "code": "EP",
                    "display": "Emergency contact person",
                    "definition": "Emergency contact person"
                },
                {
                    "code": "PR",
                    "display": "Person preparing referral",
                    "definition": "Person preparing referral"
                },
                {
                    "code": "E",
                    "display": "Employer",
                    "definition": "Employer"
                },
                {
                    "code": "C",
                    "display": "Emergency Contact",
                    "definition": "Emergency Contact"
                },
                {
                    "code": "F",
                    "display": "Federal Agency",
                    "definition": "Federal Agency"
                },
                {
                    "code": "I",
                    "display": "Insurance Company",
                    "definition": "Insurance Company"
                },
                {
                    "code": "N",
                    "display": "Next-of-Kin",
                    "definition": "Next-of-Kin"
                },
                {
                    "code": "S",
                    "display": "State Agency",
                    "definition": "State Agency"
                },
                {
                    "code": "O",
                    "display": "Other",
                    "definition": "Other"
                },
                {
                    "code": "U",
                    "display": "Unknown",
                    "definition": "Unknown"
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

module.exports = ContactRole2;
