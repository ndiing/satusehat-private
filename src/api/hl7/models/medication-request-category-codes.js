const DB = require("../../../lib/sqlite");

class MedicationRequestCategoryCodes extends DB {
    constructor() {
        super("MedicationRequestCategoryCodes");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "inpatient",
                    "display": "Inpatient",
                    "definition": "Includes requests for medications to be administered or consumed in an inpatient or acute care setting"
                },
                {
                    "code": "outpatient",
                    "display": "Outpatient",
                    "definition": "Includes requests for medications to be administered or consumed in an outpatient setting (for example, Emergency Department, Outpatient Clinic, Outpatient Surgery, Doctor's office)"
                },
                {
                    "code": "community",
                    "display": "Community",
                    "definition": "Includes requests for medications to be administered or consumed by the patient in their home (this would include long term care or nursing homes, hospices, etc.)"
                },
                {
                    "code": "discharge",
                    "display": "Discharge",
                    "definition": "Includes requests for medications created when the patient is being released from a facility"
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

module.exports = MedicationRequestCategoryCodes;
