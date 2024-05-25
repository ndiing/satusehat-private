const express = require("express");

const Controller = require("./controller.js");

const OAuth2 = require("./controllers/oauth2.js");
// const ErrorResponse = require("./controllers/error-response.js");
const Practitioner = require("./controllers/practitioner.js");
const Organization = require("./controllers/organization.js");
const Location = require("./controllers/location.js");
const Encounter = require("./controllers/encounter.js");
const Condition = require("./controllers/condition.js");
const ObservationTTV = require("./controllers/observation-ttv.js");
const Composition = require("./controllers/composition.js");
const Procedure = require("./controllers/procedure.js");
const Medication = require("./controllers/medication.js");
const MedicationRequest = require("./controllers/medication-request.js");
const MedicationDispense = require("./controllers/medication-dispense.js");
const DiagnosticReport = require("./controllers/diagnostic-report.js");
const AllergyIntolerance = require("./controllers/allergy-intolerance.js");
const ClinicalImpression = require("./controllers/clinical-impression.js");
const HealthcareService = require("./controllers/healthcare-service.js");
const Appointment = require("./controllers/appointment.js");
const AppointmentResponse = require("./controllers/appointment-response.js");
const PractitionerRole = require("./controllers/practitioner-role.js");
const Slot = require("./controllers/slot.js");
const Immunization = require("./controllers/immunization.js");
const ImagingStudy = require("./controllers/imaging-study.js");
const EpisodeOfCare = require("./controllers/episode-of-care.js");
const CarePlan = require("./controllers/care-plan.js");
const FamilyMemberHistory = require("./controllers/family-member-history.js");
const QuestionnaireResponse = require("./controllers/questionnaire-response.js");
const ServiceRequest = require("./controllers/service-request.js");
const Specimen = require("./controllers/specimen.js");
const RelatedPerson = require("./controllers/related-person.js");
const Patient = require("./controllers/patient.js");

const urls = ["http://dicom.nema.org/resources/ontology/DCM", "http://hl7.org/fhir/sid/cvx", "http://hl7.org/fhir/sid/icd-10", "http://hl7.org/fhir/sid/icd-9-cm", "http://loinc.org", "http://sampleorg.com/southwing", "http://snomed.info/sct", "http://sys-ids.kemkes.go.id/acsn/{{Org_id}}", "http://sys-ids.kemkes.go.id/allergy/{{Org_id}}", "http://sys-ids.kemkes.go.id/bpjs-poli", "http://sys-ids.kemkes.go.id/cha-appointment", "http://sys-ids.kemkes.go.id/clinicalimpression/{{Org_id}}", "http://sys-ids.kemkes.go.id/composition/{{Org_id}}", "http://sys-ids.kemkes.go.id/diagnostic/{{Org_id}}/lab", "http://sys-ids.kemkes.go.id/encounter/{{Org_id}}", "http://sys-ids.kemkes.go.id/episode-of-care/{{Org_id}}", "http://sys-ids.kemkes.go.id/healthcareservice/{{Org_id}}", "http://sys-ids.kemkes.go.id/kfa", "http://sys-ids.kemkes.go.id/location/{{Org_id}}", "http://sys-ids.kemkes.go.id/medication/{{Org_id}}", "http://sys-ids.kemkes.go.id/organization/1000079374", "http://sys-ids.kemkes.go.id/organization/{{Org_id}}", "http://sys-ids.kemkes.go.id/prescription-item/{{Org_id}}", "http://sys-ids.kemkes.go.id/prescription/{{Org_id}}", "http://sys-ids.kemkes.go.id/servicerequest/{{Org_id}}", "http://sys-ids.kemkes.go.id/specimen/{{Org_id}}", "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical", "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification", "http://terminology.hl7.org/CodeSystem/condition-category", "http://terminology.hl7.org/CodeSystem/condition-clinical", "http://terminology.hl7.org/CodeSystem/diagnosis-role", "http://terminology.hl7.org/CodeSystem/discharge-disposition", "http://terminology.hl7.org/CodeSystem/dose-rate-type", "http://terminology.hl7.org/CodeSystem/location-physical-type", "http://terminology.hl7.org/CodeSystem/medicationrequest-category", "http://terminology.hl7.org/CodeSystem/medicationrequest-course-of-therapy", "http://terminology.hl7.org/CodeSystem/observation-category", "http://terminology.hl7.org/CodeSystem/organization-type", "http://terminology.hl7.org/CodeSystem/practitioner-role", "http://terminology.hl7.org/CodeSystem/service-type", "http://terminology.hl7.org/CodeSystem/v2-0074", "http://terminology.hl7.org/CodeSystem/v2-0131", "http://terminology.hl7.org/CodeSystem/v2-0203", "http://terminology.hl7.org/CodeSystem/v2-0276", "http://terminology.hl7.org/CodeSystem/v2-0443", "http://terminology.hl7.org/CodeSystem/v3-ActCode", "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus", "http://terminology.hl7.org/CodeSystem/v3-ParticipationType", "http://terminology.hl7.org/CodeSystem/v3-RoleCode", "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm", "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-category", "http://terminology.kemkes.go.id/CodeSystem/clinical-speciality", "http://terminology.kemkes.go.id/CodeSystem/episodeofcare-type", "http://terminology.kemkes.go.id/CodeSystem/immunization-reason", "http://terminology.kemkes.go.id/CodeSystem/immunization-routine-timing", "http://terminology.kemkes.go.id/CodeSystem/keluarga-sejahtera", "http://terminology.kemkes.go.id/CodeSystem/medication-form", "http://terminology.kemkes.go.id/CodeSystem/medication-type", "http://terminology.kemkes.go.id/CodeSystem/program", "http://unitsofmeasure.org", "http://www.whocc.no/atc", "https://fhir.kemkes.go.id/Questionnaire/Q0002", "https://fhir.kemkes.go.id/id/kk", "https://fhir.kemkes.go.id/id/nik", "https://fhir.kemkes.go.id/id/nik-ibu", "https://fhir.kemkes.go.id/id/paspor", "https://fhir.kemkes.go.id/r4/StructureDefinition/CollectorOrganization", "https://fhir.kemkes.go.id/r4/StructureDefinition/Medication", "https://fhir.kemkes.go.id/r4/StructureDefinition/MedicationType", "https://fhir.kemkes.go.id/r4/StructureDefinition/Patient", "https://fhir.kemkes.go.id/r4/StructureDefinition/RelatedPerson", "https://fhir.kemkes.go.id/r4/StructureDefinition/TransportedTime", "https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode", "https://fhir.kemkes.go.id/r4/StructureDefinition/birthPlace", "https://fhir.kemkes.go.id/r4/StructureDefinition/citizenshipStatus"];

const router = express.Router();

router.use(Controller.init);

router.get("/accesstoken", OAuth2.init, OAuth2.get);
router.post("/accesstoken", OAuth2.init, OAuth2.post);

// router.get("see_example", ErrorResponse.init, ErrorResponse.get);

// router.use(OAuth2.init,OAuth2.refresh);

router.get("/Practitioner", OAuth2.init, OAuth2.refresh, Practitioner.init, Practitioner.get);
router.get("/Practitioner/:id", OAuth2.init, OAuth2.refresh, Practitioner.init, Practitioner.getId);

router.post("/Organization", OAuth2.init, OAuth2.refresh, Organization.init, Organization.post);
router.get("/Organization/:id", OAuth2.init, OAuth2.refresh, Organization.init, Organization.getId);
router.get("/Organization", OAuth2.init, OAuth2.refresh, Organization.init, Organization.get);
router.put("/Organization/:id", OAuth2.init, OAuth2.refresh, Organization.init, Organization.putId);
router.patch("/Organization/:id", OAuth2.init, OAuth2.refresh, Organization.init, Organization.patchId);

router.post("/Location", OAuth2.init, OAuth2.refresh, Location.init, Location.post);
router.get("/Location", OAuth2.init, OAuth2.refresh, Location.init, Location.get);
router.get("/Location/:id", OAuth2.init, OAuth2.refresh, Location.init, Location.getId);
router.put("/Location/:id", OAuth2.init, OAuth2.refresh, Location.init, Location.putId);
router.patch("/Location/:id", OAuth2.init, OAuth2.refresh, Location.init, Location.patchId);

router.post("/Encounter", OAuth2.init, OAuth2.refresh, Encounter.init, Encounter.post);
router.get("/Encounter/:id", OAuth2.init, OAuth2.refresh, Encounter.init, Encounter.getId);
router.get("/Encounter", OAuth2.init, OAuth2.refresh, Encounter.init, Encounter.get);
router.put("/Encounter/:id", OAuth2.init, OAuth2.refresh, Encounter.init, Encounter.putId);
router.patch("/Encounter/:id", OAuth2.init, OAuth2.refresh, Encounter.init, Encounter.patchId);

router.post("/Condition", OAuth2.init, OAuth2.refresh, Condition.init, Condition.post);
router.get("/Condition", OAuth2.init, OAuth2.refresh, Condition.init, Condition.get);
router.get("/Condition/:id", OAuth2.init, OAuth2.refresh, Condition.init, Condition.getId);
router.put("/Condition/:id", OAuth2.init, OAuth2.refresh, Condition.init, Condition.putId);
router.patch("/Condition/:id", OAuth2.init, OAuth2.refresh, Condition.init, Condition.patchId);

router.post("/Observation", OAuth2.init, OAuth2.refresh, ObservationTTV.init, ObservationTTV.post);
router.get("/Observation", OAuth2.init, OAuth2.refresh, ObservationTTV.init, ObservationTTV.get);
router.get("/Observation/:id", OAuth2.init, OAuth2.refresh, ObservationTTV.init, ObservationTTV.getId);
router.put("/Observation/:id", OAuth2.init, OAuth2.refresh, ObservationTTV.init, ObservationTTV.putId);
router.patch("/Observation/:id", OAuth2.init, OAuth2.refresh, ObservationTTV.init, ObservationTTV.patchId);

router.post("/Composition", OAuth2.init, OAuth2.refresh, Composition.init, Composition.post);
router.get("/Composition", OAuth2.init, OAuth2.refresh, Composition.init, Composition.get);
router.get("/Composition/:id", OAuth2.init, OAuth2.refresh, Composition.init, Composition.getId);
router.put("/Composition/:id", OAuth2.init, OAuth2.refresh, Composition.init, Composition.putId);
router.patch("/Composition/:id", OAuth2.init, OAuth2.refresh, Composition.init, Composition.patchId);

router.post("/Procedure", OAuth2.init, OAuth2.refresh, Procedure.init, Procedure.post);
router.get("/Procedure", OAuth2.init, OAuth2.refresh, Procedure.init, Procedure.get);
router.get("/Procedure/:id", OAuth2.init, OAuth2.refresh, Procedure.init, Procedure.getId);
router.put("/Procedure/:id", OAuth2.init, OAuth2.refresh, Procedure.init, Procedure.putId);
router.patch("/Procedure/:id", OAuth2.init, OAuth2.refresh, Procedure.init, Procedure.patchId);

router.post("/Medication", OAuth2.init, OAuth2.refresh, Medication.init, Medication.post);
router.get("/Medication/:id", OAuth2.init, OAuth2.refresh, Medication.init, Medication.getId);
router.put("/Medication/:id", OAuth2.init, OAuth2.refresh, Medication.init, Medication.putId);
router.patch("/Medication/:id", OAuth2.init, OAuth2.refresh, Medication.init, Medication.patchId);

router.post("/MedicationRequest", OAuth2.init, OAuth2.refresh, MedicationRequest.init, MedicationRequest.post);
router.get("/MedicationRequest", OAuth2.init, OAuth2.refresh, MedicationRequest.init, MedicationRequest.get);
router.get("/MedicationRequest/:id", OAuth2.init, OAuth2.refresh, MedicationRequest.init, MedicationRequest.getId);
router.put("/MedicationRequest/:id", OAuth2.init, OAuth2.refresh, MedicationRequest.init, MedicationRequest.putId);
router.patch("/MedicationRequest/:id", OAuth2.init, OAuth2.refresh, MedicationRequest.init, MedicationRequest.patchId);

router.post("/MedicationDispense", OAuth2.init, OAuth2.refresh, MedicationDispense.init, MedicationDispense.post);
router.get("/MedicationDispense", OAuth2.init, OAuth2.refresh, MedicationDispense.init, MedicationDispense.get);
router.get("/MedicationDispense/:id", OAuth2.init, OAuth2.refresh, MedicationDispense.init, MedicationDispense.getId);
router.put("/MedicationDispense/:id", OAuth2.init, OAuth2.refresh, MedicationDispense.init, MedicationDispense.putId);
router.patch("/MedicationDispense/:id", OAuth2.init, OAuth2.refresh, MedicationDispense.init, MedicationDispense.patchId);

router.post("/DiagnosticReport", OAuth2.init, OAuth2.refresh, DiagnosticReport.init, DiagnosticReport.post);
router.get("/DiagnosticReport", OAuth2.init, OAuth2.refresh, DiagnosticReport.init, DiagnosticReport.get);
router.get("/DiagnosticReport/:id", OAuth2.init, OAuth2.refresh, DiagnosticReport.init, DiagnosticReport.getId);
router.put("/DiagnosticReport/:id", OAuth2.init, OAuth2.refresh, DiagnosticReport.init, DiagnosticReport.putId);
router.patch("/DiagnosticReport/:id", OAuth2.init, OAuth2.refresh, DiagnosticReport.init, DiagnosticReport.patchId);

router.post("/AllergyIntolerance", OAuth2.init, OAuth2.refresh, AllergyIntolerance.init, AllergyIntolerance.post);
router.get("/AllergyIntolerance", OAuth2.init, OAuth2.refresh, AllergyIntolerance.init, AllergyIntolerance.get);
router.get("/AllergyIntolerance/:id", OAuth2.init, OAuth2.refresh, AllergyIntolerance.init, AllergyIntolerance.getId);
router.put("/AllergyIntolerance/:id", OAuth2.init, OAuth2.refresh, AllergyIntolerance.init, AllergyIntolerance.putId);
router.patch("/AllergyIntolerance/:id", OAuth2.init, OAuth2.refresh, AllergyIntolerance.init, AllergyIntolerance.patchId);

router.post("/ClinicalImpression", OAuth2.init, OAuth2.refresh, ClinicalImpression.init, ClinicalImpression.post);
router.get("/ClinicalImpression", OAuth2.init, OAuth2.refresh, ClinicalImpression.init, ClinicalImpression.get);
router.get("/ClinicalImpression/:id", OAuth2.init, OAuth2.refresh, ClinicalImpression.init, ClinicalImpression.getId);
router.put("/ClinicalImpression/:id", OAuth2.init, OAuth2.refresh, ClinicalImpression.init, ClinicalImpression.putId);
router.patch("/ClinicalImpression/:id", OAuth2.init, OAuth2.refresh, ClinicalImpression.init, ClinicalImpression.patchId);

router.post("/HealthcareService", OAuth2.init, OAuth2.refresh, HealthcareService.init, HealthcareService.post);
router.get("/HealthcareService/:id", OAuth2.init, OAuth2.refresh, HealthcareService.init, HealthcareService.getId);
router.get("/HealthcareService", OAuth2.init, OAuth2.refresh, HealthcareService.init, HealthcareService.get);
router.put("/HealthcareService/:id", OAuth2.init, OAuth2.refresh, HealthcareService.init, HealthcareService.putId);
router.patch("/HealthcareService/:id", OAuth2.init, OAuth2.refresh, HealthcareService.init, HealthcareService.patchId);

router.post("/Appointment", OAuth2.init, OAuth2.refresh, Appointment.init, Appointment.post);
router.get("/Appointment", OAuth2.init, OAuth2.refresh, Appointment.init, Appointment.get);
router.get("/Appointment/:id", OAuth2.init, OAuth2.refresh, Appointment.init, Appointment.getId);
router.put("/Appointment/:id", OAuth2.init, OAuth2.refresh, Appointment.init, Appointment.putId);
router.patch("/Appointment/:id", OAuth2.init, OAuth2.refresh, Appointment.init, Appointment.patchId);

router.post("/AppointmentResponse", OAuth2.init, OAuth2.refresh, AppointmentResponse.init, AppointmentResponse.post);
router.get("/AppointmentResponse/:id", OAuth2.init, OAuth2.refresh, AppointmentResponse.init, AppointmentResponse.getId);
router.get("/AppointmentResponse", OAuth2.init, OAuth2.refresh, AppointmentResponse.init, AppointmentResponse.get);
router.put("/AppointmentResponse/:id", OAuth2.init, OAuth2.refresh, AppointmentResponse.init, AppointmentResponse.putId);
router.patch("/AppointmentResponse/:id", OAuth2.init, OAuth2.refresh, AppointmentResponse.init, AppointmentResponse.patchId);

router.post("/PractitionerRole", OAuth2.init, OAuth2.refresh, PractitionerRole.init, PractitionerRole.post);
router.get("/PractitionerRole/:id", OAuth2.init, OAuth2.refresh, PractitionerRole.init, PractitionerRole.getId);
router.get("/PractitionerRole", OAuth2.init, OAuth2.refresh, PractitionerRole.init, PractitionerRole.get);
router.put("/PractitionerRole/:id", OAuth2.init, OAuth2.refresh, PractitionerRole.init, PractitionerRole.putId);
router.patch("/PractitionerRole/:id", OAuth2.init, OAuth2.refresh, PractitionerRole.init, PractitionerRole.patchId);

router.post("/Slot", OAuth2.init, OAuth2.refresh, Slot.init, Slot.post);
router.get("/Slot/:id", OAuth2.init, OAuth2.refresh, Slot.init, Slot.getId);
router.put("/Slot/:id", OAuth2.init, OAuth2.refresh, Slot.init, Slot.putId);
router.patch("/Slot/:id", OAuth2.init, OAuth2.refresh, Slot.init, Slot.patchId);

router.get("/Immunization", OAuth2.init, OAuth2.refresh, Immunization.init, Immunization.get);
router.get("/Immunization/:id", OAuth2.init, OAuth2.refresh, Immunization.init, Immunization.getId);
router.put("/Immunization/:id", OAuth2.init, OAuth2.refresh, Immunization.init, Immunization.putId);
router.patch("/Immunization/:id", OAuth2.init, OAuth2.refresh, Immunization.init, Immunization.patchId);

router.post("/ImagingStudy", OAuth2.init, OAuth2.refresh, ImagingStudy.init, ImagingStudy.post);
router.get("/ImagingStudy", OAuth2.init, OAuth2.refresh, ImagingStudy.init, ImagingStudy.get);
router.put("/ImagingStudy/:id", OAuth2.init, OAuth2.refresh, ImagingStudy.init, ImagingStudy.putId);

router.post("/EpisodeOfCare", OAuth2.init, OAuth2.refresh, EpisodeOfCare.init, EpisodeOfCare.post);
router.get("/EpisodeOfCare", OAuth2.init, OAuth2.refresh, EpisodeOfCare.init, EpisodeOfCare.get);
router.get("/EpisodeOfCare/:id", OAuth2.init, OAuth2.refresh, EpisodeOfCare.init, EpisodeOfCare.getId);
router.put("/EpisodeOfCare/:id", OAuth2.init, OAuth2.refresh, EpisodeOfCare.init, EpisodeOfCare.putId);
router.patch("/EpisodeOfCare/:id", OAuth2.init, OAuth2.refresh, EpisodeOfCare.init, EpisodeOfCare.patchId);

router.post("/CarePlan", OAuth2.init, OAuth2.refresh, CarePlan.init, CarePlan.post);
router.get("/CarePlan/:id", OAuth2.init, OAuth2.refresh, CarePlan.init, CarePlan.getId);
router.get("/CarePlan", OAuth2.init, OAuth2.refresh, CarePlan.init, CarePlan.get);
router.put("/CarePlan/:id", OAuth2.init, OAuth2.refresh, CarePlan.init, CarePlan.putId);
router.patch("/CarePlan/:id", OAuth2.init, OAuth2.refresh, CarePlan.init, CarePlan.patchId);

router.post("/FamilyMemberHistory", OAuth2.init, OAuth2.refresh, FamilyMemberHistory.init, FamilyMemberHistory.post);
router.get("/FamilyMemberHistory/:id", OAuth2.init, OAuth2.refresh, FamilyMemberHistory.init, FamilyMemberHistory.getId);
router.get("/FamilyMemberHistory", OAuth2.init, OAuth2.refresh, FamilyMemberHistory.init, FamilyMemberHistory.get);
router.put("/FamilyMemberHistory/:id", OAuth2.init, OAuth2.refresh, FamilyMemberHistory.init, FamilyMemberHistory.putId);
router.patch("/FamilyMemberHistory/:id", OAuth2.init, OAuth2.refresh, FamilyMemberHistory.init, FamilyMemberHistory.patchId);

router.post("/QuestionnaireResponse", OAuth2.init, OAuth2.refresh, QuestionnaireResponse.init, QuestionnaireResponse.post);
router.put("/QuestionnaireResponse/:id", OAuth2.init, OAuth2.refresh, QuestionnaireResponse.init, QuestionnaireResponse.putId);
router.get("/QuestionnaireResponse", OAuth2.init, OAuth2.refresh, QuestionnaireResponse.init, QuestionnaireResponse.get);
router.get("/QuestionnaireResponse/:id", OAuth2.init, OAuth2.refresh, QuestionnaireResponse.init, QuestionnaireResponse.getId);

router.post("/ServiceRequest", OAuth2.init, OAuth2.refresh, ServiceRequest.init, ServiceRequest.post);
router.get("/ServiceRequest", OAuth2.init, OAuth2.refresh, ServiceRequest.init, ServiceRequest.get);
router.get("/ServiceRequest/:id", OAuth2.init, OAuth2.refresh, ServiceRequest.init, ServiceRequest.getId);
router.put("/ServiceRequest/:id", OAuth2.init, OAuth2.refresh, ServiceRequest.init, ServiceRequest.putId);
router.patch("/ServiceRequest/:id", OAuth2.init, OAuth2.refresh, ServiceRequest.init, ServiceRequest.patchId);

router.post("/Specimen", OAuth2.init, OAuth2.refresh, Specimen.init, Specimen.post);
router.put("/Specimen/:id", OAuth2.init, OAuth2.refresh, Specimen.init, Specimen.putId);
router.get("/Specimen/:id", OAuth2.init, OAuth2.refresh, Specimen.init, Specimen.getId);
router.get("/Specimen", OAuth2.init, OAuth2.refresh, Specimen.init, Specimen.get);
router.patch("/Specimen/:id", OAuth2.init, OAuth2.refresh, Specimen.init, Specimen.patchId);

router.post("/RelatedPerson", OAuth2.init, OAuth2.refresh, RelatedPerson.init, RelatedPerson.post);
router.put("/RelatedPerson/:id", OAuth2.init, OAuth2.refresh, RelatedPerson.init, RelatedPerson.putId);
router.get("/RelatedPerson", OAuth2.init, OAuth2.refresh, RelatedPerson.init, RelatedPerson.get);
router.patch("/RelatedPerson/:id", OAuth2.init, OAuth2.refresh, RelatedPerson.init, RelatedPerson.patchId);

router.get("/Patient", OAuth2.init, OAuth2.refresh, Patient.init, Patient.get);
router.get("/Patient/:id", OAuth2.init, OAuth2.refresh, Patient.init, Patient.getId);
router.post("/Patient", OAuth2.init, OAuth2.refresh, Patient.init, Patient.post);

module.exports = router;
