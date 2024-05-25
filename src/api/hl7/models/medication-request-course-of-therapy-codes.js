const DB = require("../../../lib/sqlite");

class MedicationRequestCourseOfTherapyCodes extends DB {
    constructor() {
        super("MedicationRequestCourseOfTherapyCodes");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "continuous",
                    "display": "Continuous long term therapy",
                    "definition": "A medication which is expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped."
                },
                {
                    "code": "acute",
                    "display": "Short course (acute) therapy",
                    "definition": "A medication which the patient is only expected to consume for the duration of the current order and which is not expected to be renewed."
                },
                {
                    "code": "seasonal",
                    "display": "Seasonal",
                    "definition": "A medication which is expected to be used on a part time basis at certain times of the year"
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

module.exports = MedicationRequestCourseOfTherapyCodes;
