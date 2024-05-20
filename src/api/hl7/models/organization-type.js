const DB = require("../../../lib/sqlite");

class OrganizationType extends DB {
    constructor(){
        super('OrganizationType')
    }
    
    async init() {
        await super.init();

        const { total } = await this.allDocs();

        if (total == 0) {
            const docs = [
                {
                    "_id": "prov",
                    "code": "prov",
                    "display": "Healthcare Provider",
                    "definition": "An organization that provides healthcare services."
                },
                {
                    "_id": "ins",
                    "code": "ins",
                    "display": "Insurance Company",
                    "definition": "A company that provides insurance to its subscribers that may include healthcare related policies."
                },
                {
                    "_id": "pay",
                    "code": "pay",
                    "display": "Payer",
                    "definition": "A company, charity, or governmental organization, which processes claims and/or issues payments to providers on behalf of patients or groups of patients."
                },
                {
                    "_id": "edu",
                    "code": "edu",
                    "display": "Educational Institute",
                    "definition": "An educational institution that provides education or research facilities."
                },
                {
                    "_id": "dept",
                    "code": "dept",
                    "display": "Hospital Department",
                    "definition": "A department or ward within a hospital (Generally is not applicable to top level organizations)"
                },
                {
                    "_id": "crs",
                    "code": "crs",
                    "display": "Clinical Research Sponsor",
                    "definition": "An organization that is identified as a Pharmaceutical/Clinical Research Sponsor."
                },
                {
                    "_id": "cg",
                    "code": "cg",
                    "display": "Community Group",
                    "definition": "An un-incorporated community group."
                },
                {
                    "_id": "bus",
                    "code": "bus",
                    "display": "Non-Healthcare Business or Corporation",
                    "definition": "An organization that is a registered business or corporation but not identified by other types."
                },
                {
                    "_id": "other",
                    "code": "other",
                    "display": "Other",
                    "definition": "Other type of organization not already specified."
                },
                {
                    "_id": "laboratory",
                    "code": "laboratory",
                    "display": "Laboratory",
                    "definition": "An organization that conducts medical tests."
                },
                {
                    "_id": "imaging",
                    "code": "imaging",
                    "display": "Imaging Center",
                    "definition": "An organization specialized in providing diagnostic imaging services."
                },
                {
                    "_id": "govt",
                    "code": "govt",
                    "display": "Government",
                    "definition": "A political body, often used when including organization records for government bodies such as a Federal Government, State or Local Government."
                },
                {
                    "_id": "health-information-network",
                    "code": "health-information-network",
                    "display": "Health Information Network",
                    "definition": "An organization focused on enabling the exchange and integration of health information among healthcare entities."
                },
                {
                    "_id": "health-data-aggregator",
                    "code": "health-data-aggregator",
                    "display": "Health Data Aggregator",
                    "definition": "An organization focused on compiling health-related data from various sources."
                },
                {
                    "_id": "team",
                    "code": "team",
                    "display": "Organizational team",
                    "definition": "An organizational team is usually a grouping of practitioners that perform a specific function within an organization (which could be a top level organization, or a department)."
                },
                {
                    "_id": "pharmacy",
                    "code": "pharmacy",
                    "display": "Pharmacy",
                    "definition": "An organization focused on dispensing medications and offering pharmaceutical care."
                },
                {
                    "_id": "reli",
                    "code": "reli",
                    "display": "Religious Institution",
                    "definition": "An organization that is identified as a part of a religious institution."
                }
            ]
            for (const doc of docs) {
                await this.put(doc);
            }
        }

        return Promise.resolve()
    }
}

module.exports = OrganizationType;
