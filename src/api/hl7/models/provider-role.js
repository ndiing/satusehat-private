const DB = require("../../../lib/sqlite");

class ProviderRole extends DB {
    constructor() {
        super("ProviderRole");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "AD",
                    "display": "Admitting",
                    "definition": "Admitting"
                },
                {
                    "code": "AP",
                    "display": "Administering Provider",
                    "definition": "Administering Provider"
                },
                {
                    "code": "AT",
                    "display": "Attending",
                    "definition": "Attending"
                },
                {
                    "code": "CLP",
                    "display": "Collecting Provider",
                    "definition": "Collecting Provider"
                },
                {
                    "code": "CP",
                    "display": "Consulting Provider",
                    "definition": "Consulting Provider"
                },
                {
                    "code": "DP",
                    "display": "Dispensing Provider",
                    "definition": "Dispensing Provider"
                },
                {
                    "code": "EP",
                    "display": "Entering Provider (probably not the same as transcriptionist?)",
                    "definition": "Entering Provider (probably not the same as transcriptionist?)"
                },
                {
                    "code": "FHCP",
                    "display": "Family Health Care Professional",
                    "definition": "Family Health Care Professional"
                },
                {
                    "code": "IP",
                    "display": "Initiating Provider (as in action by)",
                    "definition": "Initiating Provider (as in action by)"
                },
                {
                    "code": "MDIR",
                    "display": "Medical Director",
                    "definition": "Medical Director"
                },
                {
                    "code": "OP",
                    "display": "Ordering Provider",
                    "definition": "Ordering Provider"
                },
                {
                    "code": "PH",
                    "display": "Pharmacist   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)",
                    "definition": "Pharmacist   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)"
                },
                {
                    "code": "PP",
                    "display": "Primary Care Provider",
                    "definition": "Primary Care Provider"
                },
                {
                    "code": "RO",
                    "display": "Responsible Observer",
                    "definition": "Responsible Observer"
                },
                {
                    "code": "RP",
                    "display": "Referring Provider",
                    "definition": "Referring Provider"
                },
                {
                    "code": "RT",
                    "display": "Referred to Provider",
                    "definition": "Referred to Provider"
                },
                {
                    "code": "TR",
                    "display": "Transcriptionist",
                    "definition": "Transcriptionist"
                },
                {
                    "code": "PI",
                    "display": "Primary Interpreter",
                    "definition": "Primary Interpreter"
                },
                {
                    "code": "AI",
                    "display": "Assistant/Alternate Interpreter",
                    "definition": "Assistant/Alternate Interpreter"
                },
                {
                    "code": "TN",
                    "display": "Technician",
                    "definition": "Technician"
                },
                {
                    "code": "VP",
                    "display": "Verifying Provider",
                    "definition": "Verifying Provider"
                },
                {
                    "code": "VPS",
                    "display": "Verifying Pharmaceutical Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)",
                    "definition": "Verifying Pharmaceutical Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)"
                },
                {
                    "code": "VTS",
                    "display": "Verifying Treatment Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)",
                    "definition": "Verifying Treatment Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)"
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

module.exports = ProviderRole;
