const DB = require("../../../lib/sqlite");

class PractitionerRole extends DB {
    constructor() {
        super("PractitionerRole");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "doctor",
                    "display": "Doctor",
                    "definition": "A qualified/registered medical practitioner"
                },
                {
                    "code": "nurse",
                    "display": "Nurse",
                    "definition": "A practitioner with nursing experience that may be qualified/registered"
                },
                {
                    "code": "pharmacist",
                    "display": "Pharmacist",
                    "definition": "A qualified/registered/licensed pharmacist"
                },
                {
                    "code": "researcher",
                    "display": "Researcher",
                    "definition": "A practitioner that may perform research"
                },
                {
                    "code": "teacher",
                    "display": "Teacher/educator",
                    "definition": "Someone who is able to provide educational services"
                },
                {
                    "code": "ict",
                    "display": "ICT professional",
                    "definition": "Someone who is qualified in Information and Communication Technologies"
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

module.exports = PractitionerRole;
