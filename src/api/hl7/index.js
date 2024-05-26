const express = require("express");

const Controller = require("./controller.js");

const router = express.Router();

router.use(Controller.init);
// router.get("/CodeSystem-location-physical-type", Controller.getCodeSystemLocationPhysicalType);
// router.get("/CodeSystem-organization-type", Controller.getCodeSystemOrganizationType);
// router.get("/CodeSystem-v3-ActCode", Controller.getCodeSystemV3ActCode);
// router.get("/CodeSystem-v3-ParticipationType", Controller.getCodeSystemV3ParticipationType);

router.get('/CodeSystem-allergyintolerance-clinical/:_id?', Controller.getAllergyIntoleranceClinicalStatusCodes)
router.get('/CodeSystem-allergyintolerance-verification/:_id?', Controller.getAllergyIntoleranceVerificationStatus)
router.get('/CodeSystem-condition-category/:_id?', Controller.getConditionCategoryCodes)
router.get('/CodeSystem-condition-clinical/:_id?', Controller.getConditionClinicalStatusCodes)
router.get('/CodeSystem-diagnosis-role/:_id?', Controller.getDiagnosisRole)
router.get('/CodeSystem-discharge-disposition/:_id?', Controller.getDischargeDisposition)
router.get('/CodeSystem-dose-rate-type/:_id?', Controller.getDoseAndRateType)
router.get('/CodeSystem-location-physical-type/:_id?', Controller.getLocationType)
router.get('/CodeSystem-medicationrequest-category/:_id?', Controller.getMedicationRequestCategoryCodes)
router.get('/CodeSystem-medicationrequest-course-of-therapy/:_id?', Controller.getMedicationRequestCourseOfTherapyCodes)
router.get('/CodeSystem-observation-category/:_id?', Controller.getObservationCategoryCodes)
router.get('/CodeSystem-organization-type/:_id?', Controller.getOrganizationType)
router.get('/CodeSystem-practitioner-role/:_id?', Controller.getPractitionerRole)
router.get('/CodeSystem-service-type/:_id?', Controller.getServiceType)
router.get('/CodeSystem-v2-0074/:_id?', Controller.getDiagnosticServiceSectionId)
router.get('/CodeSystem-v2-0131/:_id?', Controller.getContactRole2)
router.get('/CodeSystem-v2-0203/:_id?', Controller.getIdentifierType)
router.get('/CodeSystem-v2-0276/:_id?', Controller.getAppointmentReason)
router.get('/CodeSystem-v2-0443/:_id?', Controller.getProviderRole)
router.get('/CodeSystem-v3-ActCode/:_id?', Controller.getActCode)
router.get('/CodeSystem-v3-MaritalStatus/:_id?', Controller.getMaritalStatus)
router.get('/CodeSystem-v3-ParticipationType/:_id?', Controller.getParticipationType)
router.get('/CodeSystem-v3-RoleCode/:_id?', Controller.getRoleCode)
router.get('/CodeSystem-v3-orderableDrugForm/:_id?', Controller.getOrderableDrugForm)

module.exports = router;
