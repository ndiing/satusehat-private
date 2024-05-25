const DB = require("../../../lib/sqlite");

class OrganizationType extends DB {
    constructor() {
        super("OrganizationType");
    }

    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "code": "prov",
                    "display": "Healthcare Provider",
                    "definition": "An organization that provides healthcare services."
                },
                {
                    "code": "dept",
                    "display": "Hospital Department",
                    "definition": "A department or ward within a hospital (Generally is not applicable to top level organizations)"
                },
                {
                    "code": "team",
                    "display": "Organizational team",
                    "definition": "An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department)."
                },
                {
                    "code": "govt",
                    "display": "Government",
                    "definition": "A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government."
                },
                {
                    "code": "ins",
                    "display": "Insurance Company",
                    "definition": "A company that provides insurance to its subscribers that may include healthcare related policies."
                },
                {
                    "code": "pay",
                    "display": "Payer",
                    "definition": "A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients."
                },
                {
                    "code": "edu",
                    "display": "Educational Institute",
                    "definition": "An educational institution that provides education or research facilities."
                },
                {
                    "code": "reli",
                    "display": "Religious Institution",
                    "definition": "An organization that is identified as a part of a religious institution."
                },
                {
                    "code": "crs",
                    "display": "Clinical Research Sponsor",
                    "definition": "An organization that is identified as a Pharmaceutical/Clinical Research Sponsor."
                },
                {
                    "code": "cg",
                    "display": "Community Group",
                    "definition": "An un-incorporated community group."
                },
                {
                    "code": "bus",
                    "display": "Non-Healthcare Business or Corporation",
                    "definition": "An organization that is a registered business or corporation but not identified by other types."
                },
                {
                    "code": "other",
                    "display": "Other",
                    "definition": "Other type of organization not already specified."
                },
                {
                    "code": "laboratory",
                    "display": "Laboratory",
                    "definition": "An organization that conducts medical tests."
                },
                {
                    "code": "imaging",
                    "display": "Imaging Center",
                    "definition": "An organization specialized in providing diagnostic imaging services."
                },
                {
                    "code": "pharmacy",
                    "display": "Pharmacy",
                    "definition": "An organization focused on dispensing medications and offering pharmaceutical care."
                },
                {
                    "code": "health-information-network",
                    "display": "Health Information Network",
                    "definition": "An organization focused on enabling the exchange and integration of health information among healthcare entities."
                },
                {
                    "code": "health-data-aggregator",
                    "display": "Health Data Aggregator",
                    "definition": "An organization focused on compiling health-related data from various sources."
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

module.exports = OrganizationType;
