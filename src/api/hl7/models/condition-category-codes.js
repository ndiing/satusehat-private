const DB = require("../../../lib/sqlite");

class ConditionCategoryCodes extends DB {
    constructor() {
        super("ConditionCategoryCodes");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "problem-list-item",
                    "display": "Problem List Item",
                    "definition": "An item on a problem list that can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person."
                },
                {
                    "code": "encounter-diagnosis",
                    "display": "Encounter Diagnosis",
                    "definition": "A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter."
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

module.exports = ConditionCategoryCodes;
