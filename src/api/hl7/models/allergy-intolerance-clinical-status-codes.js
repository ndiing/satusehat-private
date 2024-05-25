const DB = require("../../../lib/sqlite");

class AllergyIntoleranceClinicalStatusCodes extends DB {
    constructor() {
        super("AllergyIntoleranceClinicalStatusCodes");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "active",
                    "display": "Active",
                    "definition": "The subject is currently experiencing, or is at risk of, a reaction to the identified substance."
                },
                {
                    "code": "inactive",
                    "display": "Inactive",
                    "definition": "The subject is no longer at risk of a reaction to the identified substance."
                },
                {
                    "code": "resolved",
                    "display": "Resolved",
                    "definition": "A reaction to the identified substance has been clinically reassessed by testing or re-exposure and is considered no longer to be present. Re-exposure could be accidental, unplanned, or outside of any clinical setting."
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

module.exports = AllergyIntoleranceClinicalStatusCodes;
