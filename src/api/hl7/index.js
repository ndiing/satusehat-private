const express = require("express");

const Controller = require("./controller.js");

const router = express.Router();

router.use(Controller.init);
// router.get("/CodeSystem-location-physical-type", Controller.getCodeSystemLocationPhysicalType);
// router.get("/CodeSystem-organization-type", Controller.getCodeSystemOrganizationType);
// router.get("/CodeSystem-v3-ActCode", Controller.getCodeSystemV3ActCode);
// router.get("/CodeSystem-v3-ParticipationType", Controller.getCodeSystemV3ParticipationType);

router.get('/CodeSystem-allergyintolerance-clinical', Controller.getAllergyIntoleranceClinicalStatusCodes)
router.get('/CodeSystem-allergyintolerance-verification', Controller.getAllergyIntoleranceVerificationStatus)
router.get('/CodeSystem-condition-category', Controller.getConditionCategoryCodes)
router.get('/CodeSystem-condition-clinical', Controller.getConditionClinicalStatusCodes)
router.get('/CodeSystem-diagnosis-role', Controller.getDiagnosisRole)
router.get('/CodeSystem-discharge-disposition', Controller.getDischargeDisposition)
router.get('/CodeSystem-dose-rate-type', Controller.getDoseAndRateType)
router.get('/CodeSystem-location-physical-type', Controller.getLocationType)
router.get('/CodeSystem-medicationrequest-category', Controller.getMedicationRequestCategoryCodes)
router.get('/CodeSystem-medicationrequest-course-of-therapy', Controller.getMedicationRequestCourseOfTherapyCodes)
router.get('/CodeSystem-observation-category', Controller.getObservationCategoryCodes)
router.get('/CodeSystem-organization-type', Controller.getOrganizationType)
router.get('/CodeSystem-practitioner-role', Controller.getPractitionerRole)
router.get('/CodeSystem-service-type', Controller.getServiceType)
router.get('/CodeSystem-v2-0074', Controller.getDiagnosticServiceSectionId)
router.get('/CodeSystem-v2-0131', Controller.getContactRole2)
router.get('/CodeSystem-v2-0203', Controller.getIdentifierType)
router.get('/CodeSystem-v2-0276', Controller.getAppointmentReason)
router.get('/CodeSystem-v2-0443', Controller.getProviderRole)
router.get('/CodeSystem-v3-ActCode', Controller.getActCode)
router.get('/CodeSystem-v3-MaritalStatus', Controller.getMaritalStatus)
router.get('/CodeSystem-v3-ParticipationType', Controller.getParticipationType)
router.get('/CodeSystem-v3-RoleCode', Controller.getRoleCode)
router.get('/CodeSystem-v3-orderableDrugForm', Controller.getOrderableDrugForm)

module.exports = router;
