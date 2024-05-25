const DB = require("../../../lib/sqlite");

class AppointmentReason extends DB {
    constructor() {
        super("AppointmentReason");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "ROUTINE",
                    "display": "Routine appointment - default if not valued",
                    "definition": "Routine appointment - default if not valued"
                },
                {
                    "code": "WALKIN",
                    "display": "A previously unscheduled walk-in visit",
                    "definition": "A previously unscheduled walk-in visit"
                },
                {
                    "code": "CHECKUP",
                    "display": "A routine check-up, such as an annual physical",
                    "definition": "A routine check-up, such as an annual physical"
                },
                {
                    "code": "FOLLOWUP",
                    "display": "A follow up visit from a previous appointment",
                    "definition": "A follow up visit from a previous appointment"
                },
                {
                    "code": "EMERGENCY",
                    "display": "Emergency appointment",
                    "definition": "Emergency appointment"
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

module.exports = AppointmentReason;
