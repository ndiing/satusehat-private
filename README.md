# Satusehat

Abiyosoft - Intergrasi Satusehat

## ENV

```env
# Konfigurasi untuk Port Layanan Web
port=3000

# Konfigurasi Server Proxy
# Jika Anda menggunakan server proxy, aktifkan baris di atas dengan menghapus tanda pagar (#) di awal baris dan sesuaikan dengan alamat dan port server proxy Anda.
proxy=http://127.0.0.1:8888

# Kredensial Satusehat
# Kredensial yang diperlukan untuk mengautentikasi aplikasi dengan Satusehat.
# Pastikan kredensial ini tetap rahasia dan aman.
client_id=
client_secret=
organization_id=
```

## REST

End point `http://localhost:<port>/api`

### **[Master]()**

API Master

#### telecom

-   **<code>post</code> [/master/telecom](./rest/master/telecom.http)**
-   **<code>get</code> [/master/telecom](./rest/master/telecom.http)**
-   **<code>patch</code> [/master/telecom](./rest/master/telecom.http)**
-   **<code>delete</code> [/master/telecom](./rest/master/telecom.http)**

#### address

-   **<code>post</code> [/master/address](./rest/master/address.http)**
-   **<code>get</code> [/master/address](./rest/master/address.http)**
-   **<code>patch</code> [/master/address](./rest/master/address.http)**
-   **<code>delete</code> [/master/address](./rest/master/address.http)**

### **[HL7]()**

API HL7

-   **<code>get</code> [/hl7/CodeSystem-location-physical-type](./rest/hl7/hl7.http)**
-   **<code>get</code> [/hl7/CodeSystem-organization-type](./rest/hl7/hl7.http)**
-   **<code>get</code> [/hl7/CodeSystem-v3-ActCode](./rest/hl7/hl7.http)**
-   **<code>get</code> [/hl7/CodeSystem-v3-ParticipationType](./rest/hl7/hl7.http)**

### **[Satusehat Private]()**

API Satusehat (menggunakan original payload)

#### Practitioner

-   **<code>get</code> [/satusehat/Practitioner](./rest/satusehat-private/practitioner.http)**
-   **<code>get</code> [/satusehat/Practitioner/:id](./rest/satusehat-private/practitioner.http)**

#### Organization

-   **<code>post</code> [/satusehat/Organization](./rest/satusehat-private/organization.http)**
-   **<code>get</code> [/satusehat/Organization/:id](./rest/satusehat-private/organization.http)**
-   **<code>get</code> [/satusehat/Organization](./rest/satusehat-private/organization.http)**
-   **<code>put</code> [/satusehat/Organization/:id](./rest/satusehat-private/organization.http)**
-   **<code>patch</code> [/satusehat/Organization/:id](./rest/satusehat-private/organization.http)**

#### Location

-   **<code>post</code> [/satusehat/Location](./rest/satusehat-private/location.http)**
-   **<code>get</code> [/satusehat/Location](./rest/satusehat-private/location.http)**
-   **<code>get</code> [/satusehat/Location/:id](./rest/satusehat-private/location.http)**
-   **<code>put</code> [/satusehat/Location/:id](./rest/satusehat-private/location.http)**
-   **<code>patch</code> [/satusehat/Location/:id](./rest/satusehat-private/location.http)**

#### Encounter

-   **<code>post</code> [/satusehat/Encounter](./rest/satusehat-private/encounter.http)**
-   **<code>get</code> [/satusehat/Encounter/:id](./rest/satusehat-private/encounter.http)**
-   **<code>get</code> [/satusehat/Encounter](./rest/satusehat-private/encounter.http)**
-   **<code>put</code> [/satusehat/Encounter/:id](./rest/satusehat-private/encounter.http)**
-   **<code>patch</code> [/satusehat/Encounter/:id](./rest/satusehat-private/encounter.http)**

#### Condition

-   **<code>post</code> [/satusehat/Condition](./rest/satusehat-private/condition.http)**
-   **<code>get</code> [/satusehat/Condition](./rest/satusehat-private/condition.http)**
-   **<code>get</code> [/satusehat/Condition/:id](./rest/satusehat-private/condition.http)**
-   **<code>put</code> [/satusehat/Condition/:id](./rest/satusehat-private/condition.http)**
-   **<code>patch</code> [/satusehat/Condition/:id](./rest/satusehat-private/condition.http)**

#### Observation

-   **<code>post</code> [/satusehat/Observation](./rest/satusehat-private/observation.http)**
-   **<code>get</code> [/satusehat/Observation](./rest/satusehat-private/observation.http)**
-   **<code>get</code> [/satusehat/Observation/:id](./rest/satusehat-private/observation.http)**
-   **<code>put</code> [/satusehat/Observation/:id](./rest/satusehat-private/observation.http)**
-   **<code>patch</code> [/satusehat/Observation/:id](./rest/satusehat-private/observation.http)**

#### Composition

-   **<code>post</code> [/satusehat/Composition](./rest/satusehat-private/composition.http)**
-   **<code>get</code> [/satusehat/Composition](./rest/satusehat-private/composition.http)**
-   **<code>get</code> [/satusehat/Composition/:id](./rest/satusehat-private/composition.http)**
-   **<code>put</code> [/satusehat/Composition/:id](./rest/satusehat-private/composition.http)**
-   **<code>patch</code> [/satusehat/Composition/:id](./rest/satusehat-private/composition.http)**

#### Procedure

-   **<code>post</code> [/satusehat/Procedure](./rest/satusehat-private/procedure.http)**
-   **<code>get</code> [/satusehat/Procedure](./rest/satusehat-private/procedure.http)**
-   **<code>get</code> [/satusehat/Procedure/:id](./rest/satusehat-private/procedure.http)**
-   **<code>put</code> [/satusehat/Procedure/:id](./rest/satusehat-private/procedure.http)**
-   **<code>patch</code> [/satusehat/Procedure/:id](./rest/satusehat-private/procedure.http)**

#### Medication

-   **<code>post</code> [/satusehat/Medication](./rest/satusehat-private/medication.http)**
-   **<code>get</code> [/satusehat/Medication/:id](./rest/satusehat-private/medication.http)**
-   **<code>put</code> [/satusehat/Medication/:id](./rest/satusehat-private/medication.http)**
-   **<code>patch</code> [/satusehat/Medication/:id](./rest/satusehat-private/medication.http)**

#### MedicationRequest

-   **<code>post</code> [/satusehat/MedicationRequest](./rest/satusehat-private/medication-request.http)**
-   **<code>get</code> [/satusehat/MedicationRequest](./rest/satusehat-private/medication-request.http)**
-   **<code>get</code> [/satusehat/MedicationRequest/:id](./rest/satusehat-private/medication-request.http)**
-   **<code>put</code> [/satusehat/MedicationRequest/:id](./rest/satusehat-private/medication-request.http)**
-   **<code>patch</code> [/satusehat/MedicationRequest/:id](./rest/satusehat-private/medication-request.http)**

#### MedicationDispense

-   **<code>post</code> [/satusehat/MedicationDispense](./rest/satusehat-private/medication-dispense.http)**
-   **<code>get</code> [/satusehat/MedicationDispense](./rest/satusehat-private/medication-dispense.http)**
-   **<code>get</code> [/satusehat/MedicationDispense/:id](./rest/satusehat-private/medication-dispense.http)**
-   **<code>put</code> [/satusehat/MedicationDispense/:id](./rest/satusehat-private/medication-dispense.http)**
-   **<code>patch</code> [/satusehat/MedicationDispense/:id](./rest/satusehat-private/medication-dispense.http)**

#### DiagnosticReport

-   **<code>post</code> [/satusehat/DiagnosticReport](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>get</code> [/satusehat/DiagnosticReport](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>get</code> [/satusehat/DiagnosticReport/:id](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>put</code> [/satusehat/DiagnosticReport/:id](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>patch</code> [/satusehat/DiagnosticReport/:id](./rest/satusehat-private/diagnostic-report.http)**

#### AllergyIntolerance

-   **<code>post</code> [/satusehat/AllergyIntolerance](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>get</code> [/satusehat/AllergyIntolerance](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>get</code> [/satusehat/AllergyIntolerance/:id](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>put</code> [/satusehat/AllergyIntolerance/:id](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>patch</code> [/satusehat/AllergyIntolerance/:id](./rest/satusehat-private/allergy-intolerance.http)**

#### ClinicalImpression

-   **<code>post</code> [/satusehat/ClinicalImpression](./rest/satusehat-private/clinical-impression.http)**
-   **<code>get</code> [/satusehat/ClinicalImpression](./rest/satusehat-private/clinical-impression.http)**
-   **<code>get</code> [/satusehat/ClinicalImpression/:id](./rest/satusehat-private/clinical-impression.http)**
-   **<code>put</code> [/satusehat/ClinicalImpression/:id](./rest/satusehat-private/clinical-impression.http)**
-   **<code>patch</code> [/satusehat/ClinicalImpression/:id](./rest/satusehat-private/clinical-impression.http)**

#### HealthcareService

-   **<code>post</code> [/satusehat/HealthcareService](./rest/satusehat-private/healthcare-service.http)**
-   **<code>get</code> [/satusehat/HealthcareService/:id](./rest/satusehat-private/healthcare-service.http)**
-   **<code>get</code> [/satusehat/HealthcareService](./rest/satusehat-private/healthcare-service.http)**
-   **<code>put</code> [/satusehat/HealthcareService/:id](./rest/satusehat-private/healthcare-service.http)**
-   **<code>patch</code> [/satusehat/HealthcareService/:id](./rest/satusehat-private/healthcare-service.http)**

#### Appointment

-   **<code>post</code> [/satusehat/Appointment](./rest/satusehat-private/appointment.http)**
-   **<code>get</code> [/satusehat/Appointment](./rest/satusehat-private/appointment.http)**
-   **<code>get</code> [/satusehat/Appointment/:id](./rest/satusehat-private/appointment.http)**
-   **<code>put</code> [/satusehat/Appointment/:id](./rest/satusehat-private/appointment.http)**
-   **<code>patch</code> [/satusehat/Appointment/:id](./rest/satusehat-private/appointment.http)**

#### AppointmentResponse

-   **<code>post</code> [/satusehat/AppointmentResponse](./rest/satusehat-private/appointment-response.http)**
-   **<code>get</code> [/satusehat/AppointmentResponse/:id](./rest/satusehat-private/appointment-response.http)**
-   **<code>get</code> [/satusehat/AppointmentResponse](./rest/satusehat-private/appointment-response.http)**
-   **<code>put</code> [/satusehat/AppointmentResponse/:id](./rest/satusehat-private/appointment-response.http)**
-   **<code>patch</code> [/satusehat/AppointmentResponse/:id](./rest/satusehat-private/appointment-response.http)**

#### PractitionerRole

-   **<code>post</code> [/satusehat/PractitionerRole](./rest/satusehat-private/practitioner-role.http)**
-   **<code>get</code> [/satusehat/PractitionerRole/:id](./rest/satusehat-private/practitioner-role.http)**
-   **<code>get</code> [/satusehat/PractitionerRole](./rest/satusehat-private/practitioner-role.http)**
-   **<code>put</code> [/satusehat/PractitionerRole/:id](./rest/satusehat-private/practitioner-role.http)**
-   **<code>patch</code> [/satusehat/PractitionerRole/:id](./rest/satusehat-private/practitioner-role.http)**

#### Slot

-   **<code>post</code> [/satusehat/Slot](./rest/satusehat-private/slot.http)**
-   **<code>get</code> [/satusehat/Slot/:id](./rest/satusehat-private/slot.http)**
-   **<code>put</code> [/satusehat/Slot/:id](./rest/satusehat-private/slot.http)**
-   **<code>patch</code> [/satusehat/Slot/:id](./rest/satusehat-private/slot.http)**

#### Immunization

-   **<code>get</code> [/satusehat/Immunization](./rest/satusehat-private/immunization.http)**
-   **<code>get</code> [/satusehat/Immunization/:id](./rest/satusehat-private/immunization.http)**
-   **<code>put</code> [/satusehat/Immunization/:id](./rest/satusehat-private/immunization.http)**
-   **<code>patch</code> [/satusehat/Immunization/:id](./rest/satusehat-private/immunization.http)**

#### ImagingStudy

-   **<code>post</code> [/satusehat/ImagingStudy](./rest/satusehat-private/imaging-study.http)**
-   **<code>get</code> [/satusehat/ImagingStudy](./rest/satusehat-private/imaging-study.http)**
-   **<code>put</code> [/satusehat/ImagingStudy/:id](./rest/satusehat-private/imaging-study.http)**

#### EpisodeOfCare

-   **<code>post</code> [/satusehat/EpisodeOfCare](./rest/satusehat-private/episode-of-care.http)**
-   **<code>get</code> [/satusehat/EpisodeOfCare](./rest/satusehat-private/episode-of-care.http)**
-   **<code>get</code> [/satusehat/EpisodeOfCare/:id](./rest/satusehat-private/episode-of-care.http)**
-   **<code>put</code> [/satusehat/EpisodeOfCare/:id](./rest/satusehat-private/episode-of-care.http)**
-   **<code>patch</code> [/satusehat/EpisodeOfCare/:id](./rest/satusehat-private/episode-of-care.http)**

#### CarePlan

-   **<code>post</code> [/satusehat/CarePlan](./rest/satusehat-private/care-plan.http)**
-   **<code>get</code> [/satusehat/CarePlan/:id](./rest/satusehat-private/care-plan.http)**
-   **<code>get</code> [/satusehat/CarePlan](./rest/satusehat-private/care-plan.http)**
-   **<code>put</code> [/satusehat/CarePlan/:id](./rest/satusehat-private/care-plan.http)**
-   **<code>patch</code> [/satusehat/CarePlan/:id](./rest/satusehat-private/care-plan.http)**

#### FamilyMemberHistory

-   **<code>post</code> [/satusehat/FamilyMemberHistory](./rest/satusehat-private/family-member-history.http)**
-   **<code>get</code> [/satusehat/FamilyMemberHistory/:id](./rest/satusehat-private/family-member-history.http)**
-   **<code>get</code> [/satusehat/FamilyMemberHistory](./rest/satusehat-private/family-member-history.http)**
-   **<code>put</code> [/satusehat/FamilyMemberHistory/:id](./rest/satusehat-private/family-member-history.http)**
-   **<code>patch</code> [/satusehat/FamilyMemberHistory/:id](./rest/satusehat-private/family-member-history.http)**

#### QuestionnaireResponse

-   **<code>post</code> [/satusehat/QuestionnaireResponse](./rest/satusehat-private/questionnaire-response.http)**
-   **<code>put</code> [/satusehat/QuestionnaireResponse/:id](./rest/satusehat-private/questionnaire-response.http)**
-   **<code>get</code> [/satusehat/QuestionnaireResponse](./rest/satusehat-private/questionnaire-response.http)**
-   **<code>get</code> [/satusehat/QuestionnaireResponse/:id](./rest/satusehat-private/questionnaire-response.http)**

#### ServiceRequest

-   **<code>post</code> [/satusehat/ServiceRequest](./rest/satusehat-private/service-request.http)**
-   **<code>get</code> [/satusehat/ServiceRequest](./rest/satusehat-private/service-request.http)**
-   **<code>get</code> [/satusehat/ServiceRequest/:id](./rest/satusehat-private/service-request.http)**
-   **<code>put</code> [/satusehat/ServiceRequest/:id](./rest/satusehat-private/service-request.http)**
-   **<code>patch</code> [/satusehat/ServiceRequest/:id](./rest/satusehat-private/service-request.http)**

#### Specimen

-   **<code>post</code> [/satusehat/Specimen](./rest/satusehat-private/specimen.http)**
-   **<code>put</code> [/satusehat/Specimen/:id](./rest/satusehat-private/specimen.http)**
-   **<code>get</code> [/satusehat/Specimen/:id](./rest/satusehat-private/specimen.http)**
-   **<code>get</code> [/satusehat/Specimen](./rest/satusehat-private/specimen.http)**
-   **<code>patch</code> [/satusehat/Specimen/:id](./rest/satusehat-private/specimen.http)**

#### RelatedPerson

-   **<code>post</code> [/satusehat/RelatedPerson](./rest/satusehat-private/related-person.http)**
-   **<code>put</code> [/satusehat/RelatedPerson/:id](./rest/satusehat-private/related-person.http)**
-   **<code>get</code> [/satusehat/RelatedPerson](./rest/satusehat-private/related-person.http)**
-   **<code>patch</code> [/satusehat/RelatedPerson/:id](./rest/satusehat-private/related-person.http)**

#### Patient

-   **<code>get</code> [/satusehat/Patient](./rest/satusehat-private/patient.http)**
-   **<code>get</code> [/satusehat/Patient/:id](./rest/satusehat-private/patient.http)**
-   **<code>post</code> [/satusehat/Patient](./rest/satusehat-private/patient.http)**

### **[Satusehat Mapping]()**

API Satusehat (menggunakan payload mapping)

#### Practitioner

-   **<code>get</code> [/satusehat/Practitioner](./rest/satusehat-mapping/practitioner.http)**
-   **<code>get</code> [/satusehat/Practitioner/:id](./rest/satusehat-mapping/practitioner.http)**

#### Organization

-   **<code>post</code> [/satusehat/Organization](./rest/satusehat-mapping/organization.http)**
-   **<code>get</code> [/satusehat/Organization/:id](./rest/satusehat-mapping/organization.http)**
-   **<code>get</code> [/satusehat/Organization](./rest/satusehat-mapping/organization.http)**
-   **<code>put</code> [/satusehat/Organization/:id](./rest/satusehat-mapping/organization.http)**
-   **<code>patch</code> [/satusehat/Organization/:id](./rest/satusehat-mapping/organization.http)**

#### Location

-   **<code>post</code> [/satusehat/Location](./rest/satusehat-mapping/location.http)**
-   **<code>get</code> [/satusehat/Location](./rest/satusehat-mapping/location.http)**
-   **<code>get</code> [/satusehat/Location/:id](./rest/satusehat-mapping/location.http)**
-   **<code>put</code> [/satusehat/Location/:id](./rest/satusehat-mapping/location.http)**
-   **<code>patch</code> [/satusehat/Location/:id](./rest/satusehat-mapping/location.http)**

#### Encounter

-   **<code>post</code> [/satusehat/Encounter](./rest/satusehat-mapping/encounter.http)**
-   **<code>get</code> [/satusehat/Encounter/:id](./rest/satusehat-mapping/encounter.http)**
-   **<code>get</code> [/satusehat/Encounter](./rest/satusehat-mapping/encounter.http)**
-   **<code>put</code> [/satusehat/Encounter/:id](./rest/satusehat-mapping/encounter.http)**
-   **<code>patch</code> [/satusehat/Encounter/:id](./rest/satusehat-mapping/encounter.http)**

#### Condition

-   **<code>post</code> [/satusehat/Condition](./rest/satusehat-mapping/condition.http)**
-   **<code>get</code> [/satusehat/Condition](./rest/satusehat-mapping/condition.http)**
-   **<code>get</code> [/satusehat/Condition/:id](./rest/satusehat-mapping/condition.http)**
-   **<code>put</code> [/satusehat/Condition/:id](./rest/satusehat-mapping/condition.http)**
-   **<code>patch</code> [/satusehat/Condition/:id](./rest/satusehat-mapping/condition.http)**

#### Observation

-   **<code>post</code> [/satusehat/Observation](./rest/satusehat-mapping/observation.http)**
-   **<code>get</code> [/satusehat/Observation](./rest/satusehat-mapping/observation.http)**
-   **<code>get</code> [/satusehat/Observation/:id](./rest/satusehat-mapping/observation.http)**
-   **<code>put</code> [/satusehat/Observation/:id](./rest/satusehat-mapping/observation.http)**
-   **<code>patch</code> [/satusehat/Observation/:id](./rest/satusehat-mapping/observation.http)**

#### Composition

-   **<code>post</code> [/satusehat/Composition](./rest/satusehat-mapping/composition.http)**
-   **<code>get</code> [/satusehat/Composition](./rest/satusehat-mapping/composition.http)**
-   **<code>get</code> [/satusehat/Composition/:id](./rest/satusehat-mapping/composition.http)**
-   **<code>put</code> [/satusehat/Composition/:id](./rest/satusehat-mapping/composition.http)**
-   **<code>patch</code> [/satusehat/Composition/:id](./rest/satusehat-mapping/composition.http)**

#### Procedure

-   **<code>post</code> [/satusehat/Procedure](./rest/satusehat-mapping/procedure.http)**
-   **<code>get</code> [/satusehat/Procedure](./rest/satusehat-mapping/procedure.http)**
-   **<code>get</code> [/satusehat/Procedure/:id](./rest/satusehat-mapping/procedure.http)**
-   **<code>put</code> [/satusehat/Procedure/:id](./rest/satusehat-mapping/procedure.http)**
-   **<code>patch</code> [/satusehat/Procedure/:id](./rest/satusehat-mapping/procedure.http)**

#### Medication

-   **<code>post</code> [/satusehat/Medication](./rest/satusehat-mapping/medication.http)**
-   **<code>get</code> [/satusehat/Medication/:id](./rest/satusehat-mapping/medication.http)**
-   **<code>put</code> [/satusehat/Medication/:id](./rest/satusehat-mapping/medication.http)**
-   **<code>patch</code> [/satusehat/Medication/:id](./rest/satusehat-mapping/medication.http)**

#### MedicationRequest

-   **<code>post</code> [/satusehat/MedicationRequest](./rest/satusehat-mapping/medication-request.http)**
-   **<code>get</code> [/satusehat/MedicationRequest](./rest/satusehat-mapping/medication-request.http)**
-   **<code>get</code> [/satusehat/MedicationRequest/:id](./rest/satusehat-mapping/medication-request.http)**
-   **<code>put</code> [/satusehat/MedicationRequest/:id](./rest/satusehat-mapping/medication-request.http)**
-   **<code>patch</code> [/satusehat/MedicationRequest/:id](./rest/satusehat-mapping/medication-request.http)**

#### MedicationDispense

-   **<code>post</code> [/satusehat/MedicationDispense](./rest/satusehat-mapping/medication-dispense.http)**
-   **<code>get</code> [/satusehat/MedicationDispense](./rest/satusehat-mapping/medication-dispense.http)**
-   **<code>get</code> [/satusehat/MedicationDispense/:id](./rest/satusehat-mapping/medication-dispense.http)**
-   **<code>put</code> [/satusehat/MedicationDispense/:id](./rest/satusehat-mapping/medication-dispense.http)**
-   **<code>patch</code> [/satusehat/MedicationDispense/:id](./rest/satusehat-mapping/medication-dispense.http)**

#### DiagnosticReport

-   **<code>post</code> [/satusehat/DiagnosticReport](./rest/satusehat-mapping/diagnostic-report.http)**
-   **<code>get</code> [/satusehat/DiagnosticReport](./rest/satusehat-mapping/diagnostic-report.http)**
-   **<code>get</code> [/satusehat/DiagnosticReport/:id](./rest/satusehat-mapping/diagnostic-report.http)**
-   **<code>put</code> [/satusehat/DiagnosticReport/:id](./rest/satusehat-mapping/diagnostic-report.http)**
-   **<code>patch</code> [/satusehat/DiagnosticReport/:id](./rest/satusehat-mapping/diagnostic-report.http)**

#### AllergyIntolerance

-   **<code>post</code> [/satusehat/AllergyIntolerance](./rest/satusehat-mapping/allergy-intolerance.http)**
-   **<code>get</code> [/satusehat/AllergyIntolerance](./rest/satusehat-mapping/allergy-intolerance.http)**
-   **<code>get</code> [/satusehat/AllergyIntolerance/:id](./rest/satusehat-mapping/allergy-intolerance.http)**
-   **<code>put</code> [/satusehat/AllergyIntolerance/:id](./rest/satusehat-mapping/allergy-intolerance.http)**
-   **<code>patch</code> [/satusehat/AllergyIntolerance/:id](./rest/satusehat-mapping/allergy-intolerance.http)**

#### ClinicalImpression

-   **<code>post</code> [/satusehat/ClinicalImpression](./rest/satusehat-mapping/clinical-impression.http)**
-   **<code>get</code> [/satusehat/ClinicalImpression](./rest/satusehat-mapping/clinical-impression.http)**
-   **<code>get</code> [/satusehat/ClinicalImpression/:id](./rest/satusehat-mapping/clinical-impression.http)**
-   **<code>put</code> [/satusehat/ClinicalImpression/:id](./rest/satusehat-mapping/clinical-impression.http)**
-   **<code>patch</code> [/satusehat/ClinicalImpression/:id](./rest/satusehat-mapping/clinical-impression.http)**

#### HealthcareService

-   **<code>post</code> [/satusehat/HealthcareService](./rest/satusehat-mapping/healthcare-service.http)**
-   **<code>get</code> [/satusehat/HealthcareService/:id](./rest/satusehat-mapping/healthcare-service.http)**
-   **<code>get</code> [/satusehat/HealthcareService](./rest/satusehat-mapping/healthcare-service.http)**
-   **<code>put</code> [/satusehat/HealthcareService/:id](./rest/satusehat-mapping/healthcare-service.http)**
-   **<code>patch</code> [/satusehat/HealthcareService/:id](./rest/satusehat-mapping/healthcare-service.http)**

#### Appointment

-   **<code>post</code> [/satusehat/Appointment](./rest/satusehat-mapping/appointment.http)**
-   **<code>get</code> [/satusehat/Appointment](./rest/satusehat-mapping/appointment.http)**
-   **<code>get</code> [/satusehat/Appointment/:id](./rest/satusehat-mapping/appointment.http)**
-   **<code>put</code> [/satusehat/Appointment/:id](./rest/satusehat-mapping/appointment.http)**
-   **<code>patch</code> [/satusehat/Appointment/:id](./rest/satusehat-mapping/appointment.http)**

#### AppointmentResponse

-   **<code>post</code> [/satusehat/AppointmentResponse](./rest/satusehat-mapping/appointment-response.http)**
-   **<code>get</code> [/satusehat/AppointmentResponse/:id](./rest/satusehat-mapping/appointment-response.http)**
-   **<code>get</code> [/satusehat/AppointmentResponse](./rest/satusehat-mapping/appointment-response.http)**
-   **<code>put</code> [/satusehat/AppointmentResponse/:id](./rest/satusehat-mapping/appointment-response.http)**
-   **<code>patch</code> [/satusehat/AppointmentResponse/:id](./rest/satusehat-mapping/appointment-response.http)**

#### PractitionerRole

-   **<code>post</code> [/satusehat/PractitionerRole](./rest/satusehat-mapping/practitioner-role.http)**
-   **<code>get</code> [/satusehat/PractitionerRole/:id](./rest/satusehat-mapping/practitioner-role.http)**
-   **<code>get</code> [/satusehat/PractitionerRole](./rest/satusehat-mapping/practitioner-role.http)**
-   **<code>put</code> [/satusehat/PractitionerRole/:id](./rest/satusehat-mapping/practitioner-role.http)**
-   **<code>patch</code> [/satusehat/PractitionerRole/:id](./rest/satusehat-mapping/practitioner-role.http)**

#### Slot

-   **<code>post</code> [/satusehat/Slot](./rest/satusehat-mapping/slot.http)**
-   **<code>get</code> [/satusehat/Slot/:id](./rest/satusehat-mapping/slot.http)**
-   **<code>put</code> [/satusehat/Slot/:id](./rest/satusehat-mapping/slot.http)**
-   **<code>patch</code> [/satusehat/Slot/:id](./rest/satusehat-mapping/slot.http)**

#### Immunization

-   **<code>get</code> [/satusehat/Immunization](./rest/satusehat-mapping/immunization.http)**
-   **<code>get</code> [/satusehat/Immunization/:id](./rest/satusehat-mapping/immunization.http)**
-   **<code>put</code> [/satusehat/Immunization/:id](./rest/satusehat-mapping/immunization.http)**
-   **<code>patch</code> [/satusehat/Immunization/:id](./rest/satusehat-mapping/immunization.http)**

#### ImagingStudy

-   **<code>post</code> [/satusehat/ImagingStudy](./rest/satusehat-mapping/imaging-study.http)**
-   **<code>get</code> [/satusehat/ImagingStudy](./rest/satusehat-mapping/imaging-study.http)**
-   **<code>put</code> [/satusehat/ImagingStudy/:id](./rest/satusehat-mapping/imaging-study.http)**

#### EpisodeOfCare

-   **<code>post</code> [/satusehat/EpisodeOfCare](./rest/satusehat-mapping/episode-of-care.http)**
-   **<code>get</code> [/satusehat/EpisodeOfCare](./rest/satusehat-mapping/episode-of-care.http)**
-   **<code>get</code> [/satusehat/EpisodeOfCare/:id](./rest/satusehat-mapping/episode-of-care.http)**
-   **<code>put</code> [/satusehat/EpisodeOfCare/:id](./rest/satusehat-mapping/episode-of-care.http)**
-   **<code>patch</code> [/satusehat/EpisodeOfCare/:id](./rest/satusehat-mapping/episode-of-care.http)**

#### CarePlan

-   **<code>post</code> [/satusehat/CarePlan](./rest/satusehat-mapping/care-plan.http)**
-   **<code>get</code> [/satusehat/CarePlan/:id](./rest/satusehat-mapping/care-plan.http)**
-   **<code>get</code> [/satusehat/CarePlan](./rest/satusehat-mapping/care-plan.http)**
-   **<code>put</code> [/satusehat/CarePlan/:id](./rest/satusehat-mapping/care-plan.http)**
-   **<code>patch</code> [/satusehat/CarePlan/:id](./rest/satusehat-mapping/care-plan.http)**

#### FamilyMemberHistory

-   **<code>post</code> [/satusehat/FamilyMemberHistory](./rest/satusehat-mapping/family-member-history.http)**
-   **<code>get</code> [/satusehat/FamilyMemberHistory/:id](./rest/satusehat-mapping/family-member-history.http)**
-   **<code>get</code> [/satusehat/FamilyMemberHistory](./rest/satusehat-mapping/family-member-history.http)**
-   **<code>put</code> [/satusehat/FamilyMemberHistory/:id](./rest/satusehat-mapping/family-member-history.http)**
-   **<code>patch</code> [/satusehat/FamilyMemberHistory/:id](./rest/satusehat-mapping/family-member-history.http)**

#### QuestionnaireResponse

-   **<code>post</code> [/satusehat/QuestionnaireResponse](./rest/satusehat-mapping/questionnaire-response.http)**
-   **<code>put</code> [/satusehat/QuestionnaireResponse/:id](./rest/satusehat-mapping/questionnaire-response.http)**
-   **<code>get</code> [/satusehat/QuestionnaireResponse](./rest/satusehat-mapping/questionnaire-response.http)**
-   **<code>get</code> [/satusehat/QuestionnaireResponse/:id](./rest/satusehat-mapping/questionnaire-response.http)**

#### ServiceRequest

-   **<code>post</code> [/satusehat/ServiceRequest](./rest/satusehat-mapping/service-request.http)**
-   **<code>get</code> [/satusehat/ServiceRequest](./rest/satusehat-mapping/service-request.http)**
-   **<code>get</code> [/satusehat/ServiceRequest/:id](./rest/satusehat-mapping/service-request.http)**
-   **<code>put</code> [/satusehat/ServiceRequest/:id](./rest/satusehat-mapping/service-request.http)**
-   **<code>patch</code> [/satusehat/ServiceRequest/:id](./rest/satusehat-mapping/service-request.http)**

#### Specimen

-   **<code>post</code> [/satusehat/Specimen](./rest/satusehat-mapping/specimen.http)**
-   **<code>put</code> [/satusehat/Specimen/:id](./rest/satusehat-mapping/specimen.http)**
-   **<code>get</code> [/satusehat/Specimen/:id](./rest/satusehat-mapping/specimen.http)**
-   **<code>get</code> [/satusehat/Specimen](./rest/satusehat-mapping/specimen.http)**
-   **<code>patch</code> [/satusehat/Specimen/:id](./rest/satusehat-mapping/specimen.http)**

#### RelatedPerson

-   **<code>post</code> [/satusehat/RelatedPerson](./rest/satusehat-mapping/related-person.http)**
-   **<code>put</code> [/satusehat/RelatedPerson/:id](./rest/satusehat-mapping/related-person.http)**
-   **<code>get</code> [/satusehat/RelatedPerson](./rest/satusehat-mapping/related-person.http)**
-   **<code>patch</code> [/satusehat/RelatedPerson/:id](./rest/satusehat-mapping/related-person.http)**

#### Patient

-   **<code>get</code> [/satusehat/Patient](./rest/satusehat-mapping/patient.http)**
-   **<code>get</code> [/satusehat/Patient/:id](./rest/satusehat-mapping/patient.http)**
-   **<code>post</code> [/satusehat/Patient](./rest/satusehat-mapping/patient.http)**

## LINK

-   [DEV](https://github.com/ndiing/satusehat-private)
-   [Public](https://github.com/ndiing/satusehat-public)
-   [Public README](https://github.com/ndiing/satusehat-public/blob/main/README.md)
-   [Public releases Download](https://github.com/ndiing/satusehat-public/releases)
