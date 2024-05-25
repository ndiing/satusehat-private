const DB = require("../../../lib/sqlite");

class ConditionClinicalStatusCodes extends DB {
    constructor() {
        super("ConditionClinicalStatusCodes");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "active",
                    "display": "Active",
                    "definition": "The subject is currently experiencing the condition or situation, there is evidence of the condition or situation, or considered to be a significant risk."
                },
                {
                    "code": "recurrence",
                    "display": "Recurrence",
                    "definition": "The subject is experiencing a reoccurence or repeating of a previously resolved condition or situation, e.g. urinary tract infection, food insecurity."
                },
                {
                    "code": "relapse",
                    "display": "Relapse",
                    "definition": "The subject is experiencing a return of a condition or situation after a period of improvement or remission, e.g. relapse of cancer, alcoholism."
                },
                {
                    "code": "inactive",
                    "display": "Inactive",
                    "definition": "The subject is no longer experiencing the condition or situation and there is no longer evidence or appreciable risk of the condition or situation."
                },
                {
                    "code": "remission",
                    "display": "Remission",
                    "definition": "The subject is not presently experiencing the condition or situation, but there is a risk of the condition or situation returning."
                },
                {
                    "code": "resolved",
                    "display": "Resolved",
                    "definition": "The subject is not presently experiencing the condition or situation and there is a negligible perceived risk of the condition or situation returning."
                },
                {
                    "code": "unknown",
                    "display": "Unknown",
                    "definition": "The authoring/source system does not know which of the status values currently applies for this condition. Note: This concept is not to be used for \"other\" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which."
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

module.exports = ConditionClinicalStatusCodes;
