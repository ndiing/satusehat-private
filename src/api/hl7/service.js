const { extract } = require("./helper");

class Service {
    constructor() {}

    async getCodeSystemOrganizationType() {
        try {
            const response = await fetch("https://terminology.hl7.org/5.5.0/CodeSystem-organization-type.json");
            const json = await response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }

    async getCodeSystemLocationPhysicalType() {
        try {
            const response = await fetch("https://terminology.hl7.org/5.5.0/CodeSystem-location-physical-type.json");
            const json = await response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }

    async getCodeSystemV3ActCode() {
        try {
            const response = await fetch("https://terminology.hl7.org/5.5.0/CodeSystem-v3-ActCode.json");
            const json = await response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }

    async getCodeSystemV3ParticipationType() {
        try {
            const response = await fetch("https://terminology.hl7.org/5.5.0/CodeSystem-v3-ParticipationType.json");
            const json = await response.json();
            return json;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Service;

// const service = new Service();

// const DB = require("../../lib/sqlite");
// const OrganizationType = new DB("OrganizationType");
// const LocationPhysicalType = new DB("LocationPhysicalType");
// const ActCode = new DB("ActCode");
// const ParticipationType = new DB("ParticipationType");

// service.getCodeSystemOrganizationType().then(extract).then(res=>res.map(doc=>OrganizationType.put({_id:doc.code,...doc}))).then(console.log).catch(console.error);
// service.getCodeSystemLocationPhysicalType().then(extract).then(res=>res.map(doc=>LocationPhysicalType.put({_id:doc.code,...doc}))).then(console.log).catch(console.error);
// service.getCodeSystemV3ActCode().then(extract).then(res=>res.map(doc=>ActCode.put({_id:doc.code,...doc}))).then(console.log).catch(console.error);
// service.getCodeSystemV3ParticipationType().then(extract).then(res=>res.map(doc=>ParticipationType.put({_id:doc.code,...doc}))).then(console.log).catch(console.error);
