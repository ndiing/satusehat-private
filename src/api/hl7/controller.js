const Model = require("./model.js");
const Service = require("./service.js");
const Helper = require("./helper.js");
const Client = require("./client.js");
const Store = require("./store.js");

// const OrganizationType = require('./models/organization-type.js')
// const LocationPhysicalType = require('./models/location-physical-type.js')
// const ActCode = require('./models/act-code.js')
// const ParticipationType = require('./models/participation-type.js')

const AllergyIntoleranceClinicalStatusCodes = require('./models/allergy-intolerance-clinical-status-codes.js')
const AllergyIntoleranceVerificationStatus = require('./models/allergy-intolerance-verification-status.js')
const ConditionCategoryCodes = require('./models/condition-category-codes.js')
const ConditionClinicalStatusCodes = require('./models/condition-clinical-status-codes.js')
const DiagnosisRole = require('./models/diagnosis-role.js')
const DischargeDisposition = require('./models/discharge-disposition.js')
const DoseAndRateType = require('./models/dose-and-rate-type.js')
const LocationType = require('./models/location-type.js')
const MedicationRequestCategoryCodes = require('./models/medication-request-category-codes.js')
const MedicationRequestCourseOfTherapyCodes = require('./models/medication-request-course-of-therapy-codes.js')
const ObservationCategoryCodes = require('./models/observation-category-codes.js')
const OrganizationType = require('./models/organization-type.js')
const PractitionerRole = require('./models/practitioner-role.js')
const ServiceType = require('./models/service-type.js')
const DiagnosticServiceSectionId = require('./models/diagnostic-service-section-id.js')
const ContactRole2 = require('./models/contact-role2.js')
const IdentifierType = require('./models/identifier-type.js')
const AppointmentReason = require('./models/appointment-reason.js')
const ProviderRole = require('./models/provider-role.js')
const ActCode = require('./models/act-code.js')
const MaritalStatus = require('./models/marital-status.js')
const ParticipationType = require('./models/participation-type.js')
const RoleCode = require('./models/role-code.js')
const OrderableDrugForm = require('./models/orderable-drug-form.js')

class Controller {
    static async init(req, res, next) {
        try {
            // res.locals.service = new Service();

            next();
        } catch (error) {
            next(error);
        }
    }

    // static async getCodeSystemOrganizationType(req, res, next) {
    //     try {
    //         // const response = await res.locals.service.getCodeSystemOrganizationType();
    //         // res.json(response.concept);
    //         res.locals.OrganizationType = new OrganizationType()
    //         await res.locals.OrganizationType.init()
    //         const response = await res.locals.OrganizationType.allDocs();
    //         res.json(response);
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    // static async getCodeSystemLocationPhysicalType(req, res, next) {
    //     try {
    //         // const response = await res.locals.service.getCodeSystemLocationPhysicalType();
    //         // res.json(response.concept);
    //         res.locals.LocationPhysicalType = new LocationPhysicalType()
    //         await res.locals.LocationPhysicalType.init()
    //         const response = await res.locals.LocationPhysicalType.allDocs();
    //         res.json(response);
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    // static async getCodeSystemV3ActCode(req, res, next) {
    //     try {
    //         // const response = await res.locals.service.getCodeSystemV3ActCode();
    //         // res.json(response.concept);
    //         res.locals.ActCode = new ActCode()
    //         await res.locals.ActCode.init()
    //         const response = await res.locals.ActCode.allDocs();
    //         res.json(response);
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    // static async getCodeSystemV3ParticipationType(req, res, next) {
    //     try {
    //         // const response = await res.locals.service.getCodeSystemV3ParticipationType();
    //         // res.json(response.concept);
    //         res.locals.ParticipationType = new ParticipationType()
    //         await res.locals.ParticipationType.init()
    //         const response = await res.locals.ParticipationType.allDocs();
    //         res.json(response);
    //     } catch (error) {
    //         next(error);
    //     }
    // }

    static async getAllergyIntoleranceClinicalStatusCodes(req,res,next){
        try {
            const model = new AllergyIntoleranceClinicalStatusCodes()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getAllergyIntoleranceVerificationStatus(req,res,next){
        try {
            const model = new AllergyIntoleranceVerificationStatus()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getConditionCategoryCodes(req,res,next){
        try {
            const model = new ConditionCategoryCodes()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getConditionClinicalStatusCodes(req,res,next){
        try {
            const model = new ConditionClinicalStatusCodes()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getDiagnosisRole(req,res,next){
        try {
            const model = new DiagnosisRole()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getDischargeDisposition(req,res,next){
        try {
            const model = new DischargeDisposition()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getDoseAndRateType(req,res,next){
        try {
            const model = new DoseAndRateType()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getLocationType(req,res,next){
        try {
            const model = new LocationType()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getMedicationRequestCategoryCodes(req,res,next){
        try {
            const model = new MedicationRequestCategoryCodes()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getMedicationRequestCourseOfTherapyCodes(req,res,next){
        try {
            const model = new MedicationRequestCourseOfTherapyCodes()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getObservationCategoryCodes(req,res,next){
        try {
            const model = new ObservationCategoryCodes()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getOrganizationType(req,res,next){
        try {
            const model = new OrganizationType()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getPractitionerRole(req,res,next){
        try {
            const model = new PractitionerRole()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getServiceType(req,res,next){
        try {
            const model = new ServiceType()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getDiagnosticServiceSectionId(req,res,next){
        try {
            const model = new DiagnosticServiceSectionId()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getContactRole2(req,res,next){
        try {
            const model = new ContactRole2()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getIdentifierType(req,res,next){
        try {
            const model = new IdentifierType()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getAppointmentReason(req,res,next){
        try {
            const model = new AppointmentReason()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getProviderRole(req,res,next){
        try {
            const model = new ProviderRole()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getActCode(req,res,next){
        try {
            const model = new ActCode()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getMaritalStatus(req,res,next){
        try {
            const model = new MaritalStatus()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getParticipationType(req,res,next){
        try {
            const model = new ParticipationType()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getRoleCode(req,res,next){
        try {
            const model = new RoleCode()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    static async getOrderableDrugForm(req,res,next){
        try {
            const model = new OrderableDrugForm()
            await model.init()
            const result = await model.allDocs()
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller;
