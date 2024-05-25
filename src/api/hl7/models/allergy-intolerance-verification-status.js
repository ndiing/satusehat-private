const DB = require("../../../lib/sqlite");

class AllergyIntoleranceVerificationStatus extends DB {
    constructor() {
        super("AllergyIntoleranceVerificationStatus");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "unconfirmed",
                    "display": "Unconfirmed",
                    "definition": "The propensity for a reaction to the identified substance has not been objectively verified."
                },
                {
                    "code": "presumed",
                    "display": "Presumed",
                    "definition": "The available clinical information supports a high liklihood of the propensity for a reaction to the identified substance."
                },
                {
                    "code": "confirmed",
                    "display": "Confirmed",
                    "definition": "The propensity for a reaction to the identified substance has been objectively verified (which may include clinical evidence by testing, rechallenge, or observation)."
                },
                {
                    "code": "refuted",
                    "display": "Refuted",
                    "definition": "A propensity for a reaction to the identified substance has been disputed or disproven with a sufficient level of clinical certainty to justify invalidating the assertion. This might or might not include testing or rechallenge."
                },
                {
                    "code": "entered-in-error",
                    "display": "Entered in Error",
                    "definition": "The statement was entered in error and is not valid."
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

module.exports = AllergyIntoleranceVerificationStatus;
