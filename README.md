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

-   **<code>post</code> [/telecom](./rest/master/telecom.http)**
-   **<code>get</code> [/telecom](./rest/master/telecom.http)**
-   **<code>patch</code> [/telecom](./rest/master/telecom.http)**
-   **<code>delete</code> [/telecom](./rest/master/telecom.http)**

#### address

-   **<code>post</code> [/address](./rest/master/address.http)**
-   **<code>get</code> [/address](./rest/master/address.http)**
-   **<code>patch</code> [/address](./rest/master/address.http)**
-   **<code>delete</code> [/address](./rest/master/address.http)**

### **[HL7]()**

API HL7

-   **<code>get</code> [/CodeSystem-location-physical-type](./rest/hl7/hl7.http)**
-   **<code>get</code> [/CodeSystem-organization-type](./rest/hl7/hl7.http)**
-   **<code>get</code> [/CodeSystem-v3-ActCode](./rest/hl7/hl7.http)**
-   **<code>get</code> [/CodeSystem-v3-ParticipationType](./rest/hl7/hl7.http)**

### **[Satusehat Private]()**

API Satusehat (menggunakan original payload)

#### Practitioner

-   **<code>get</code> [/Practitioner](./rest/satusehat-private/practitioner.http)**
-   **<code>get</code> [/Practitioner/:id](./rest/satusehat-private/practitioner.http)**

#### Organization

-   **<code>post</code> [/Organization](./rest/satusehat-private/organization.http)**
-   **<code>get</code> [/Organization/:id](./rest/satusehat-private/organization.http)**
-   **<code>get</code> [/Organization](./rest/satusehat-private/organization.http)**
-   **<code>put</code> [/Organization/:id](./rest/satusehat-private/organization.http)**
-   **<code>patch</code> [/Organization/:id](./rest/satusehat-private/organization.http)**

#### Location

-   **<code>post</code> [/Location](./rest/satusehat-private/location.http)**
-   **<code>get</code> [/Location](./rest/satusehat-private/location.http)**
-   **<code>get</code> [/Location/:id](./rest/satusehat-private/location.http)**
-   **<code>put</code> [/Location/:id](./rest/satusehat-private/location.http)**
-   **<code>patch</code> [/Location/:id](./rest/satusehat-private/location.http)**

#### Encounter

-   **<code>post</code> [/Encounter](./rest/satusehat-private/encounter.http)**
-   **<code>get</code> [/Encounter/:id](./rest/satusehat-private/encounter.http)**
-   **<code>get</code> [/Encounter](./rest/satusehat-private/encounter.http)**
-   **<code>put</code> [/Encounter/:id](./rest/satusehat-private/encounter.http)**
-   **<code>patch</code> [/Encounter/:id](./rest/satusehat-private/encounter.http)**

#### Condition

-   **<code>post</code> [/Condition](./rest/satusehat-private/condition.http)**
-   **<code>get</code> [/Condition](./rest/satusehat-private/condition.http)**
-   **<code>get</code> [/Condition/:id](./rest/satusehat-private/condition.http)**
-   **<code>put</code> [/Condition/:id](./rest/satusehat-private/condition.http)**
-   **<code>patch</code> [/Condition/:id](./rest/satusehat-private/condition.http)**

#### Observation

-   **<code>post</code> [/Observation](./rest/satusehat-private/observation.http)**
-   **<code>get</code> [/Observation](./rest/satusehat-private/observation.http)**
-   **<code>get</code> [/Observation/:id](./rest/satusehat-private/observation.http)**
-   **<code>put</code> [/Observation/:id](./rest/satusehat-private/observation.http)**
-   **<code>patch</code> [/Observation/:id](./rest/satusehat-private/observation.http)**

#### Composition

-   **<code>post</code> [/Composition](./rest/satusehat-private/composition.http)**
-   **<code>get</code> [/Composition](./rest/satusehat-private/composition.http)**
-   **<code>get</code> [/Composition/:id](./rest/satusehat-private/composition.http)**
-   **<code>put</code> [/Composition/:id](./rest/satusehat-private/composition.http)**
-   **<code>patch</code> [/Composition/:id](./rest/satusehat-private/composition.http)**

#### Procedure

-   **<code>post</code> [/Procedure](./rest/satusehat-private/procedure.http)**
-   **<code>get</code> [/Procedure](./rest/satusehat-private/procedure.http)**
-   **<code>get</code> [/Procedure/:id](./rest/satusehat-private/procedure.http)**
-   **<code>put</code> [/Procedure/:id](./rest/satusehat-private/procedure.http)**
-   **<code>patch</code> [/Procedure/:id](./rest/satusehat-private/procedure.http)**

#### Medication

-   **<code>post</code> [/Medication](./rest/satusehat-private/medication.http)**
-   **<code>get</code> [/Medication/:id](./rest/satusehat-private/medication.http)**
-   **<code>put</code> [/Medication/:id](./rest/satusehat-private/medication.http)**
-   **<code>patch</code> [/Medication/:id](./rest/satusehat-private/medication.http)**

#### MedicationRequest

-   **<code>post</code> [/MedicationRequest](./rest/satusehat-private/medication-request.http)**
-   **<code>get</code> [/MedicationRequest](./rest/satusehat-private/medication-request.http)**
-   **<code>get</code> [/MedicationRequest/:id](./rest/satusehat-private/medication-request.http)**
-   **<code>put</code> [/MedicationRequest/:id](./rest/satusehat-private/medication-request.http)**
-   **<code>patch</code> [/MedicationRequest/:id](./rest/satusehat-private/medication-request.http)**

#### MedicationDispense

-   **<code>post</code> [/MedicationDispense](./rest/satusehat-private/medication-dispense.http)**
-   **<code>get</code> [/MedicationDispense](./rest/satusehat-private/medication-dispense.http)**
-   **<code>get</code> [/MedicationDispense/:id](./rest/satusehat-private/medication-dispense.http)**
-   **<code>put</code> [/MedicationDispense/:id](./rest/satusehat-private/medication-dispense.http)**
-   **<code>patch</code> [/MedicationDispense/:id](./rest/satusehat-private/medication-dispense.http)**

#### DiagnosticReport

-   **<code>post</code> [/DiagnosticReport](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>get</code> [/DiagnosticReport](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>get</code> [/DiagnosticReport/:id](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>put</code> [/DiagnosticReport/:id](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>patch</code> [/DiagnosticReport/:id](./rest/satusehat-private/diagnostic-report.http)**

#### AllergyIntolerance

-   **<code>post</code> [/AllergyIntolerance](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>get</code> [/AllergyIntolerance](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>get</code> [/AllergyIntolerance/:id](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>put</code> [/AllergyIntolerance/:id](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>patch</code> [/AllergyIntolerance/:id](./rest/satusehat-private/allergy-intolerance.http)**

#### ClinicalImpression

-   **<code>post</code> [/ClinicalImpression](./rest/satusehat-private/clinical-impression.http)**
-   **<code>get</code> [/ClinicalImpression](./rest/satusehat-private/clinical-impression.http)**
-   **<code>get</code> [/ClinicalImpression/:id](./rest/satusehat-private/clinical-impression.http)**
-   **<code>put</code> [/ClinicalImpression/:id](./rest/satusehat-private/clinical-impression.http)**
-   **<code>patch</code> [/ClinicalImpression/:id](./rest/satusehat-private/clinical-impression.http)**

#### HealthcareService

-   **<code>post</code> [/HealthcareService](./rest/satusehat-private/healthcare-service.http)**
-   **<code>get</code> [/HealthcareService/:id](./rest/satusehat-private/healthcare-service.http)**
-   **<code>get</code> [/HealthcareService](./rest/satusehat-private/healthcare-service.http)**
-   **<code>put</code> [/HealthcareService/:id](./rest/satusehat-private/healthcare-service.http)**
-   **<code>patch</code> [/HealthcareService/:id](./rest/satusehat-private/healthcare-service.http)**

#### Appointment

-   **<code>post</code> [/Appointment](./rest/satusehat-private/appointment.http)**
-   **<code>get</code> [/Appointment](./rest/satusehat-private/appointment.http)**
-   **<code>get</code> [/Appointment/:id](./rest/satusehat-private/appointment.http)**
-   **<code>put</code> [/Appointment/:id](./rest/satusehat-private/appointment.http)**
-   **<code>patch</code> [/Appointment/:id](./rest/satusehat-private/appointment.http)**

#### AppointmentResponse

-   **<code>post</code> [/AppointmentResponse](./rest/satusehat-private/appointment-response.http)**
-   **<code>get</code> [/AppointmentResponse/:id](./rest/satusehat-private/appointment-response.http)**
-   **<code>get</code> [/AppointmentResponse](./rest/satusehat-private/appointment-response.http)**
-   **<code>put</code> [/AppointmentResponse/:id](./rest/satusehat-private/appointment-response.http)**
-   **<code>patch</code> [/AppointmentResponse/:id](./rest/satusehat-private/appointment-response.http)**

#### PractitionerRole

-   **<code>post</code> [/PractitionerRole](./rest/satusehat-private/practitioner-role.http)**
-   **<code>get</code> [/PractitionerRole/:id](./rest/satusehat-private/practitioner-role.http)**
-   **<code>get</code> [/PractitionerRole](./rest/satusehat-private/practitioner-role.http)**
-   **<code>put</code> [/PractitionerRole/:id](./rest/satusehat-private/practitioner-role.http)**
-   **<code>patch</code> [/PractitionerRole/:id](./rest/satusehat-private/practitioner-role.http)**

#### Slot

-   **<code>post</code> [/Slot](./rest/satusehat-private/slot.http)**
-   **<code>get</code> [/Slot/:id](./rest/satusehat-private/slot.http)**
-   **<code>put</code> [/Slot/:id](./rest/satusehat-private/slot.http)**
-   **<code>patch</code> [/Slot/:id](./rest/satusehat-private/slot.http)**

#### Immunization

-   **<code>get</code> [/Immunization](./rest/satusehat-private/immunization.http)**
-   **<code>get</code> [/Immunization/:id](./rest/satusehat-private/immunization.http)**
-   **<code>put</code> [/Immunization/:id](./rest/satusehat-private/immunization.http)**
-   **<code>patch</code> [/Immunization/:id](./rest/satusehat-private/immunization.http)**

#### ImagingStudy

-   **<code>post</code> [/ImagingStudy](./rest/satusehat-private/imaging-study.http)**
-   **<code>get</code> [/ImagingStudy](./rest/satusehat-private/imaging-study.http)**
-   **<code>put</code> [/ImagingStudy/:id](./rest/satusehat-private/imaging-study.http)**

#### EpisodeOfCare

-   **<code>post</code> [/EpisodeOfCare](./rest/satusehat-private/episode-of-care.http)**
-   **<code>get</code> [/EpisodeOfCare](./rest/satusehat-private/episode-of-care.http)**
-   **<code>get</code> [/EpisodeOfCare/:id](./rest/satusehat-private/episode-of-care.http)**
-   **<code>put</code> [/EpisodeOfCare/:id](./rest/satusehat-private/episode-of-care.http)**
-   **<code>patch</code> [/EpisodeOfCare/:id](./rest/satusehat-private/episode-of-care.http)**

#### CarePlan

-   **<code>post</code> [/CarePlan](./rest/satusehat-private/care-plan.http)**
-   **<code>get</code> [/CarePlan/:id](./rest/satusehat-private/care-plan.http)**
-   **<code>get</code> [/CarePlan](./rest/satusehat-private/care-plan.http)**
-   **<code>put</code> [/CarePlan/:id](./rest/satusehat-private/care-plan.http)**
-   **<code>patch</code> [/CarePlan/:id](./rest/satusehat-private/care-plan.http)**

#### FamilyMemberHistory

-   **<code>post</code> [/FamilyMemberHistory](./rest/satusehat-private/family-member-history.http)**
-   **<code>get</code> [/FamilyMemberHistory/:id](./rest/satusehat-private/family-member-history.http)**
-   **<code>get</code> [/FamilyMemberHistory](./rest/satusehat-private/family-member-history.http)**
-   **<code>put</code> [/FamilyMemberHistory/:id](./rest/satusehat-private/family-member-history.http)**
-   **<code>patch</code> [/FamilyMemberHistory/:id](./rest/satusehat-private/family-member-history.http)**

#### QuestionnaireResponse

-   **<code>post</code> [/QuestionnaireResponse](./rest/satusehat-private/questionnaire-response.http)**
-   **<code>put</code> [/QuestionnaireResponse/:id](./rest/satusehat-private/questionnaire-response.http)**
-   **<code>get</code> [/QuestionnaireResponse](./rest/satusehat-private/questionnaire-response.http)**
-   **<code>get</code> [/QuestionnaireResponse/:id](./rest/satusehat-private/questionnaire-response.http)**

#### ServiceRequest

-   **<code>post</code> [/ServiceRequest](./rest/satusehat-private/service-request.http)**
-   **<code>get</code> [/ServiceRequest](./rest/satusehat-private/service-request.http)**
-   **<code>get</code> [/ServiceRequest/:id](./rest/satusehat-private/service-request.http)**
-   **<code>put</code> [/ServiceRequest/:id](./rest/satusehat-private/service-request.http)**
-   **<code>patch</code> [/ServiceRequest/:id](./rest/satusehat-private/service-request.http)**

#### Specimen

-   **<code>post</code> [/Specimen](./rest/satusehat-private/specimen.http)**
-   **<code>put</code> [/Specimen/:id](./rest/satusehat-private/specimen.http)**
-   **<code>get</code> [/Specimen/:id](./rest/satusehat-private/specimen.http)**
-   **<code>get</code> [/Specimen](./rest/satusehat-private/specimen.http)**
-   **<code>patch</code> [/Specimen/:id](./rest/satusehat-private/specimen.http)**

#### RelatedPerson

-   **<code>post</code> [/RelatedPerson](./rest/satusehat-private/related-person.http)**
-   **<code>put</code> [/RelatedPerson/:id](./rest/satusehat-private/related-person.http)**
-   **<code>get</code> [/RelatedPerson](./rest/satusehat-private/related-person.http)**
-   **<code>patch</code> [/RelatedPerson/:id](./rest/satusehat-private/related-person.http)**

#### Patient

-   **<code>get</code> [/Patient](./rest/satusehat-private/patient.http)**
-   **<code>get</code> [/Patient/:id](./rest/satusehat-private/patient.http)**
-   **<code>post</code> [/Patient](./rest/satusehat-private/patient.http)**

### **[Satusehat Mapping]()**

API Satusehat (menggunakan payload mapping)

#### Organization

-   **<code>post</code> [/v1/Organization](./rest/satusehat-mapping/organization.http)** - [Create Organization](./docs/satusehat-mapping/organization.md)

#### Location

-   **<code>post</code> [/v1/Location](./rest/satusehat-mapping/location.http)** - [Create Location](./docs/satusehat-mapping/location.md)

#### Encounter

-   **<code>post</code> [/v1/Encounter](./rest/satusehat-mapping/encounter.http)** - [Create Encounter](./docs/satusehat-mapping/encounter.md)

## LINK

-   [DEV](https://github.com/ndiing/satusehat-private)
-   [Public](https://github.com/ndiing/satusehat-public)
-   [Public README](https://github.com/ndiing/satusehat-public/blob/main/README.md)
-   [Public releases Download](https://github.com/ndiing/satusehat-public/releases)
