const DB = require("../../../lib/sqlite");

class DischargeDisposition extends DB {
    constructor() {
        super("DischargeDisposition");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "home",
                    "display": "Home",
                    "definition": "The patient was dicharged and has indicated that they are going to return home afterwards."
                },
                {
                    "code": "alt-home",
                    "display": "Alternative home",
                    "definition": "The patient was discharged and has indicated that they are going to return home afterwards, but not the patient's home - e.g. a family member's home."
                },
                {
                    "code": "other-hcf",
                    "display": "Other healthcare facility",
                    "definition": "The patient was transferred to another healthcare facility."
                },
                {
                    "code": "hosp",
                    "display": "Hospice",
                    "definition": "The patient has been discharged into palliative care."
                },
                {
                    "code": "long",
                    "display": "Long-term care",
                    "definition": "The patient has been discharged into long-term care where is likely to be monitored through an ongoing episode-of-care."
                },
                {
                    "code": "aadvice",
                    "display": "Left against advice",
                    "definition": "The patient self discharged against medical advice."
                },
                {
                    "code": "exp",
                    "display": "Expired",
                    "definition": "The patient has deceased during this encounter."
                },
                {
                    "code": "psy",
                    "display": "Psychiatric hospital",
                    "definition": "The patient has been transferred to a psychiatric facility."
                },
                {
                    "code": "rehab",
                    "display": "Rehabilitation",
                    "definition": "The patient was discharged and is to receive post acute care rehabilitation services."
                },
                {
                    "code": "snf",
                    "display": "Skilled nursing facility",
                    "definition": "The patient has been discharged to a skilled nursing facility for the patient to receive additional care."
                },
                {
                    "code": "oth",
                    "display": "Other",
                    "definition": "The discharge disposition has not otherwise defined."
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

module.exports = DischargeDisposition;
