const { toKebabCase, toCamelCase } = require("../../lib/helper");
const { extract } = require("./helper");
const fs = require('fs')


const urls = {
    AllergyIntoleranceClinicalStatusCodes: "http://terminology.hl7.org/5.5.0/CodeSystem-allergyintolerance-clinical.json",
    AllergyIntoleranceVerificationStatus: "http://terminology.hl7.org/5.5.0/CodeSystem-allergyintolerance-verification.json",
    ConditionCategoryCodes: "http://terminology.hl7.org/5.5.0/CodeSystem-condition-category.json",
    ConditionClinicalStatusCodes: "http://terminology.hl7.org/5.5.0/CodeSystem-condition-clinical.json",
    DiagnosisRole: "http://terminology.hl7.org/5.5.0/CodeSystem-diagnosis-role.json",
    DischargeDisposition: "http://terminology.hl7.org/5.5.0/CodeSystem-discharge-disposition.json",
    DoseAndRateType: "http://terminology.hl7.org/5.5.0/CodeSystem-dose-rate-type.json",
    LocationType: "http://terminology.hl7.org/5.5.0/CodeSystem-location-physical-type.json",
    MedicationRequestCategoryCodes: "http://terminology.hl7.org/5.5.0/CodeSystem-medicationrequest-category.json",
    MedicationRequestCourseOfTherapyCodes: "http://terminology.hl7.org/5.5.0/CodeSystem-medicationrequest-course-of-therapy.json",
    ObservationCategoryCodes: "http://terminology.hl7.org/5.5.0/CodeSystem-observation-category.json",
    OrganizationType: "http://terminology.hl7.org/5.5.0/CodeSystem-organization-type.json",
    PractitionerRole: "http://terminology.hl7.org/5.5.0/CodeSystem-practitioner-role.json",
    ServiceType: "http://terminology.hl7.org/5.5.0/CodeSystem-service-type.json",
    DiagnosticServiceSectionId: "http://terminology.hl7.org/5.5.0/CodeSystem-v2-0074.json",
    ContactRole2: "http://terminology.hl7.org/5.5.0/CodeSystem-v2-0131.json",
    IdentifierType: "http://terminology.hl7.org/5.5.0/CodeSystem-v2-0203.json",
    AppointmentReason: "http://terminology.hl7.org/5.5.0/CodeSystem-v2-0276.json",
    ProviderRole: "http://terminology.hl7.org/5.5.0/CodeSystem-v2-0443.json",
    ActCode: "http://terminology.hl7.org/5.5.0/CodeSystem-v3-ActCode.json",
    MaritalStatus: "http://terminology.hl7.org/5.5.0/CodeSystem-v3-MaritalStatus.json",
    ParticipationType: "http://terminology.hl7.org/5.5.0/CodeSystem-v3-ParticipationType.json",
    RoleCode: "http://terminology.hl7.org/5.5.0/CodeSystem-v3-RoleCode.json",
    OrderableDrugForm: "http://terminology.hl7.org/5.5.0/CodeSystem-v3-orderableDrugForm.json",
};


class Service {
    constructor() {}

    async getAllergyIntoleranceClinicalStatusCodes(){
        try {
            const response = await fetch(urls.AllergyIntoleranceClinicalStatusCodes)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getAllergyIntoleranceVerificationStatus(){
        try {
            const response = await fetch(urls.AllergyIntoleranceVerificationStatus)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getConditionCategoryCodes(){
        try {
            const response = await fetch(urls.ConditionCategoryCodes)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getConditionClinicalStatusCodes(){
        try {
            const response = await fetch(urls.ConditionClinicalStatusCodes)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getDiagnosisRole(){
        try {
            const response = await fetch(urls.DiagnosisRole)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getDischargeDisposition(){
        try {
            const response = await fetch(urls.DischargeDisposition)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getDoseAndRateType(){
        try {
            const response = await fetch(urls.DoseAndRateType)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getLocationType(){
        try {
            const response = await fetch(urls.LocationType)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getMedicationRequestCategoryCodes(){
        try {
            const response = await fetch(urls.MedicationRequestCategoryCodes)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getMedicationRequestCourseOfTherapyCodes(){
        try {
            const response = await fetch(urls.MedicationRequestCourseOfTherapyCodes)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getObservationCategoryCodes(){
        try {
            const response = await fetch(urls.ObservationCategoryCodes)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getOrganizationType(){
        try {
            const response = await fetch(urls.OrganizationType)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getPractitionerRole(){
        try {
            const response = await fetch(urls.PractitionerRole)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getServiceType(){
        try {
            const response = await fetch(urls.ServiceType)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getDiagnosticServiceSectionId(){
        try {
            const response = await fetch(urls.DiagnosticServiceSectionId)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getContactRole2(){
        try {
            const response = await fetch(urls.ContactRole2)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getIdentifierType(){
        try {
            const response = await fetch(urls.IdentifierType)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getAppointmentReason(){
        try {
            const response = await fetch(urls.AppointmentReason)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getProviderRole(){
        try {
            const response = await fetch(urls.ProviderRole)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getActCode(){
        try {
            const response = await fetch(urls.ActCode)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getMaritalStatus(){
        try {
            const response = await fetch(urls.MaritalStatus)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getParticipationType(){
        try {
            const response = await fetch(urls.ParticipationType)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getRoleCode(){
        try {
            const response = await fetch(urls.RoleCode)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    async getOrderableDrugForm(){
        try {
            const response = await fetch(urls.OrderableDrugForm)
            const json = await response.json()
            return json
        } catch (error) {
            throw error
        }
    }
    
}

module.exports = Service;

// run()
// async function run(){
//     const service = new Service()
//     for(const name in urls){
//         const methodName=(toCamelCase(['get',name].join()))
//         const json = await service[methodName]()
//         const data=(extract(json))
//         const fileName=toKebabCase(name)
//         // console.log(data)
//         let code = ''
//         code += `const DB = require("../../../lib/sqlite");\r\n`
//         code += `\r\n`
//         code += `class ${name} extends DB {\r\n`
//         code += `    constructor() {\r\n`
//         code += `        super("${name}");\r\n`
//         code += `    }\r\n`
//         code += `\r\n`
//         code += `    async init() {\r\n`
//         code += `        await super.init();\r\n`
//         code += `\r\n`
//         code += `        const { total } = await this.allDocs();\r\n`
//         code += `\r\n`
//         code += `        if (total == 0) {\r\n`
//         code += `            const docs = ${JSON.stringify(data,null,4)
//             .replace(/^/gm,'            ')
//             .replace(/^\s+/,'')
//         };\r\n`
//         code += `            for (const doc of docs) {\r\n`
//         code += `                doc._id=doc.code;\r\n`
//         code += `                await this.put(doc);\r\n`
//         code += `            }\r\n`
//         code += `        }\r\n`
//         code += `\r\n`
//         code += `        return Promise.resolve();\r\n`
//         code += `    }\r\n`
//         code += `}\r\n`
//         code += `\r\n`
//         code += `module.exports = ${name};\r\n`
//         fs.writeFileSync(`./src/api/hl7/models/${fileName}.js`,code)
//         // break
//     }
// }