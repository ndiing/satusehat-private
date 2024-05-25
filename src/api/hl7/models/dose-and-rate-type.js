const DB = require("../../../lib/sqlite");

class DoseAndRateType extends DB {
    constructor() {
        super("DoseAndRateType");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "calculated",
                    "display": "Calculated",
                    "definition": "The dose specified is calculated by the prescriber or the system."
                },
                {
                    "code": "ordered",
                    "display": "Ordered",
                    "definition": "The dose specified is as ordered by the prescriber."
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

module.exports = DoseAndRateType;
