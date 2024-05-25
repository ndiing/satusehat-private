const DB = require("../../../lib/sqlite");

class DiagnosisRole extends DB {
    constructor() {
        super("DiagnosisRole");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "AD",
                    "display": "Admission diagnosis",
                    "definition": "The diagnoses documented for administrative purposes as the basis for a hospital or other institutional admission"
                },
                {
                    "code": "DD",
                    "display": "Discharge diagnosis",
                    "definition": "The diagnoses documented for administrative purposes at the time of hospital or other institutional discharge"
                },
                {
                    "code": "billing",
                    "display": "Billing",
                    "definition": "The diagnosis documented for billing purposes"
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

module.exports = DiagnosisRole;
