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

Master

#### telecom

-   **<code>POST</code> [/master/telecom](./rest/master/telecom.http)**
-   **<code>GET</code> [/master/telecom](./rest/master/telecom.http)**
-   **<code>PATCH</code> [/master/telecom](./rest/master/telecom.http)**
-   **<code>DELETE</code> [/master/telecom](./rest/master/telecom.http)**

#### address

-   **<code>POST</code> [/master/address](./rest/master/address.http)**
-   **<code>GET</code> [/master/address](./rest/master/address.http)**
-   **<code>PATCH</code> [/master/address](./rest/master/address.http)**
-   **<code>DELETE</code> [/master/address](./rest/master/address.http)**

### **[HL7]()**

HL7

#### AllergyIntoleranceClinicalStatusCodes

-   **<code>GET</code> [/hl7/CodeSystem-allergyintolerance-clinical](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-allergyintolerance-clinical/:\_id](./rest/hl7/hl7.http)**

#### AllergyIntoleranceVerificationStatus

-   **<code>GET</code> [/hl7/CodeSystem-allergyintolerance-verification](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-allergyintolerance-verification/:\_id](./rest/hl7/hl7.http)**

#### ConditionCategoryCodes

-   **<code>GET</code> [/hl7/CodeSystem-condition-category](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-condition-category/:\_id](./rest/hl7/hl7.http)**

#### ConditionClinicalStatusCodes

-   **<code>GET</code> [/hl7/CodeSystem-condition-clinical](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-condition-clinical/:\_id](./rest/hl7/hl7.http)**

#### DiagnosisRole

-   **<code>GET</code> [/hl7/CodeSystem-diagnosis-role](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-diagnosis-role/:\_id](./rest/hl7/hl7.http)**

#### DischargeDisposition

-   **<code>GET</code> [/hl7/CodeSystem-discharge-disposition](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-discharge-disposition/:\_id](./rest/hl7/hl7.http)**

#### DoseAndRateType

-   **<code>GET</code> [/hl7/CodeSystem-dose-rate-type](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-dose-rate-type/:\_id](./rest/hl7/hl7.http)**

#### LocationType

-   **<code>GET</code> [/hl7/CodeSystem-location-physical-type](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-location-physical-type/:\_id](./rest/hl7/hl7.http)**

#### MedicationRequestCategoryCodes

-   **<code>GET</code> [/hl7/CodeSystem-medicationrequest-category](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-medicationrequest-category/:\_id](./rest/hl7/hl7.http)**

#### MedicationRequestCourseOfTherapyCodes

-   **<code>GET</code> [/hl7/CodeSystem-medicationrequest-course-of-therapy](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-medicationrequest-course-of-therapy/:\_id](./rest/hl7/hl7.http)**

#### ObservationCategoryCodes

-   **<code>GET</code> [/hl7/CodeSystem-observation-category](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-observation-category/:\_id](./rest/hl7/hl7.http)**

#### OrganizationType

-   **<code>GET</code> [/hl7/CodeSystem-organization-type](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-organization-type/:\_id](./rest/hl7/hl7.http)**

#### PractitionerRole

-   **<code>GET</code> [/hl7/CodeSystem-practitioner-role](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-practitioner-role/:\_id](./rest/hl7/hl7.http)**

#### ServiceType

-   **<code>GET</code> [/hl7/CodeSystem-service-type](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-service-type/:\_id](./rest/hl7/hl7.http)**

#### DiagnosticServiceSectionId

-   **<code>GET</code> [/hl7/CodeSystem-v2-0074](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-v2-0074/:\_id](./rest/hl7/hl7.http)**

#### ContactRole2

-   **<code>GET</code> [/hl7/CodeSystem-v2-0131](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-v2-0131/:\_id](./rest/hl7/hl7.http)**

#### IdentifierType

-   **<code>GET</code> [/hl7/CodeSystem-v2-0203](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-v2-0203/:\_id](./rest/hl7/hl7.http)**

#### AppointmentReason

-   **<code>GET</code> [/hl7/CodeSystem-v2-0276](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-v2-0276/:\_id](./rest/hl7/hl7.http)**

#### ProviderRole

-   **<code>GET</code> [/hl7/CodeSystem-v2-0443](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-v2-0443/:\_id](./rest/hl7/hl7.http)**

#### ActCode

-   **<code>GET</code> [/hl7/CodeSystem-v3-ActCode](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-v3-ActCode/:\_id](./rest/hl7/hl7.http)**

#### MaritalStatus

-   **<code>GET</code> [/hl7/CodeSystem-v3-MaritalStatus](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-v3-MaritalStatus/:\_id](./rest/hl7/hl7.http)**

#### ParticipationType

-   **<code>GET</code> [/hl7/CodeSystem-v3-ParticipationType](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-v3-ParticipationType/:\_id](./rest/hl7/hl7.http)**

#### RoleCode

-   **<code>GET</code> [/hl7/CodeSystem-v3-RoleCode](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-v3-RoleCode/:\_id](./rest/hl7/hl7.http)**

#### OrderableDrugForm

-   **<code>GET</code> [/hl7/CodeSystem-v3-orderableDrugForm](./rest/hl7/hl7.http)**
-   **<code>GET</code> [/hl7/CodeSystem-v3-orderableDrugForm/:\_id](./rest/hl7/hl7.http)**

### **[Satusehat]()**

Satusehat

#### Practitioner

-   **<code>GET</code> [/satusehat/Practitioner](./rest/satusehat-mapping/practitioner.http) - [Original request](./rest/satusehat-private/practitioner.http)**
-   **<code>GET</code> [/satusehat/Practitioner/:id](./rest/satusehat-mapping/practitioner.http) - [Original request](./rest/satusehat-private/practitioner.http)**

#### Organization

-   **<code>POST</code> [/satusehat/Organization](./rest/satusehat-mapping/organization.http) - [Original request](./rest/satusehat-private/organization.http)**
-   **<code>GET</code> [/satusehat/Organization/:id](./rest/satusehat-mapping/organization.http) - [Original request](./rest/satusehat-private/organization.http)**
-   **<code>GET</code> [/satusehat/Organization](./rest/satusehat-mapping/organization.http) - [Original request](./rest/satusehat-private/organization.http)**
-   **<code>PUT</code> [/satusehat/Organization/:id](./rest/satusehat-mapping/organization.http) - [Original request](./rest/satusehat-private/organization.http)**
-   **<code>PATCH</code> [/satusehat/Organization/:id](./rest/satusehat-mapping/organization.http) - [Original request](./rest/satusehat-private/organization.http)**

#### Location

-   **<code>POST</code> [/satusehat/Location](./rest/satusehat-mapping/location.http) - [Original request](./rest/satusehat-private/location.http)**
-   **<code>GET</code> [/satusehat/Location](./rest/satusehat-mapping/location.http) - [Original request](./rest/satusehat-private/location.http)**
-   **<code>GET</code> [/satusehat/Location/:id](./rest/satusehat-mapping/location.http) - [Original request](./rest/satusehat-private/location.http)**
-   **<code>PUT</code> [/satusehat/Location/:id](./rest/satusehat-mapping/location.http) - [Original request](./rest/satusehat-private/location.http)**
-   **<code>PATCH</code> [/satusehat/Location/:id](./rest/satusehat-mapping/location.http) - [Original request](./rest/satusehat-private/location.http)**

#### Encounter

-   **<code>POST</code> [/satusehat/Encounter](./rest/satusehat-mapping/encounter.http) - [Original request](./rest/satusehat-private/encounter.http)**
-   **<code>GET</code> [/satusehat/Encounter/:id](./rest/satusehat-mapping/encounter.http) - [Original request](./rest/satusehat-private/encounter.http)**
-   **<code>GET</code> [/satusehat/Encounter](./rest/satusehat-mapping/encounter.http) - [Original request](./rest/satusehat-private/encounter.http)**
-   **<code>PUT</code> [/satusehat/Encounter/:id](./rest/satusehat-mapping/encounter.http) - [Original request](./rest/satusehat-private/encounter.http)**
-   **<code>PATCH</code> [/satusehat/Encounter/:id](./rest/satusehat-mapping/encounter.http) - [Original request](./rest/satusehat-private/encounter.http)**

#### Condition

-   **<code>POST</code> [/satusehat/Condition](./rest/satusehat-mapping/condition.http) - [Original request](./rest/satusehat-private/condition.http)**
-   **<code>GET</code> [/satusehat/Condition](./rest/satusehat-mapping/condition.http) - [Original request](./rest/satusehat-private/condition.http)**
-   **<code>GET</code> [/satusehat/Condition/:id](./rest/satusehat-mapping/condition.http) - [Original request](./rest/satusehat-private/condition.http)**
-   **<code>PUT</code> [/satusehat/Condition/:id](./rest/satusehat-mapping/condition.http) - [Original request](./rest/satusehat-private/condition.http)**
-   **<code>PATCH</code> [/satusehat/Condition/:id](./rest/satusehat-mapping/condition.http) - [Original request](./rest/satusehat-private/condition.http)**

#### Observation

-   **<code>POST</code> [/satusehat/Observation](./rest/satusehat-mapping/observation.http) - [Original request](./rest/satusehat-private/observation.http)**
-   **<code>GET</code> [/satusehat/Observation](./rest/satusehat-mapping/observation.http) - [Original request](./rest/satusehat-private/observation.http)**
-   **<code>GET</code> [/satusehat/Observation/:id](./rest/satusehat-mapping/observation.http) - [Original request](./rest/satusehat-private/observation.http)**
-   **<code>PUT</code> [/satusehat/Observation/:id](./rest/satusehat-mapping/observation.http) - [Original request](./rest/satusehat-private/observation.http)**
-   **<code>PATCH</code> [/satusehat/Observation/:id](./rest/satusehat-mapping/observation.http) - [Original request](./rest/satusehat-private/observation.http)**

#### Composition

-   **<code>POST</code> [/satusehat/Composition](./rest/satusehat-mapping/composition.http) - [Original request](./rest/satusehat-private/composition.http)**
-   **<code>GET</code> [/satusehat/Composition](./rest/satusehat-mapping/composition.http) - [Original request](./rest/satusehat-private/composition.http)**
-   **<code>GET</code> [/satusehat/Composition/:id](./rest/satusehat-mapping/composition.http) - [Original request](./rest/satusehat-private/composition.http)**
-   **<code>PUT</code> [/satusehat/Composition/:id](./rest/satusehat-mapping/composition.http) - [Original request](./rest/satusehat-private/composition.http)**
-   **<code>PATCH</code> [/satusehat/Composition/:id](./rest/satusehat-mapping/composition.http) - [Original request](./rest/satusehat-private/composition.http)**

#### Procedure

-   **<code>POST</code> [/satusehat/Procedure](./rest/satusehat-mapping/procedure.http) - [Original request](./rest/satusehat-private/procedure.http)**
-   **<code>GET</code> [/satusehat/Procedure](./rest/satusehat-mapping/procedure.http) - [Original request](./rest/satusehat-private/procedure.http)**
-   **<code>GET</code> [/satusehat/Procedure/:id](./rest/satusehat-mapping/procedure.http) - [Original request](./rest/satusehat-private/procedure.http)**
-   **<code>PUT</code> [/satusehat/Procedure/:id](./rest/satusehat-mapping/procedure.http) - [Original request](./rest/satusehat-private/procedure.http)**
-   **<code>PATCH</code> [/satusehat/Procedure/:id](./rest/satusehat-mapping/procedure.http) - [Original request](./rest/satusehat-private/procedure.http)**

#### Medication

-   **<code>POST</code> [/satusehat/Medication](./rest/satusehat-mapping/medication.http) - [Original request](./rest/satusehat-private/medication.http)**
-   **<code>GET</code> [/satusehat/Medication/:id](./rest/satusehat-mapping/medication.http) - [Original request](./rest/satusehat-private/medication.http)**
-   **<code>PUT</code> [/satusehat/Medication/:id](./rest/satusehat-mapping/medication.http) - [Original request](./rest/satusehat-private/medication.http)**
-   **<code>PATCH</code> [/satusehat/Medication/:id](./rest/satusehat-mapping/medication.http) - [Original request](./rest/satusehat-private/medication.http)**

#### MedicationRequest

-   **<code>POST</code> [/satusehat/MedicationRequest](./rest/satusehat-mapping/medication-request.http) - [Original request](./rest/satusehat-private/medication-request.http)**
-   **<code>GET</code> [/satusehat/MedicationRequest](./rest/satusehat-mapping/medication-request.http) - [Original request](./rest/satusehat-private/medication-request.http)**
-   **<code>GET</code> [/satusehat/MedicationRequest/:id](./rest/satusehat-mapping/medication-request.http) - [Original request](./rest/satusehat-private/medication-request.http)**
-   **<code>PUT</code> [/satusehat/MedicationRequest/:id](./rest/satusehat-mapping/medication-request.http) - [Original request](./rest/satusehat-private/medication-request.http)**
-   **<code>PATCH</code> [/satusehat/MedicationRequest/:id](./rest/satusehat-mapping/medication-request.http) - [Original request](./rest/satusehat-private/medication-request.http)**

#### MedicationDispense

-   **<code>POST</code> [/satusehat/MedicationDispense](./rest/satusehat-mapping/medication-dispense.http) - [Original request](./rest/satusehat-private/medication-dispense.http)**
-   **<code>GET</code> [/satusehat/MedicationDispense](./rest/satusehat-mapping/medication-dispense.http) - [Original request](./rest/satusehat-private/medication-dispense.http)**
-   **<code>GET</code> [/satusehat/MedicationDispense/:id](./rest/satusehat-mapping/medication-dispense.http) - [Original request](./rest/satusehat-private/medication-dispense.http)**
-   **<code>PUT</code> [/satusehat/MedicationDispense/:id](./rest/satusehat-mapping/medication-dispense.http) - [Original request](./rest/satusehat-private/medication-dispense.http)**
-   **<code>PATCH</code> [/satusehat/MedicationDispense/:id](./rest/satusehat-mapping/medication-dispense.http) - [Original request](./rest/satusehat-private/medication-dispense.http)**

#### DiagnosticReport

-   **<code>POST</code> [/satusehat/DiagnosticReport](./rest/satusehat-mapping/diagnostic-report.http) - [Original request](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>GET</code> [/satusehat/DiagnosticReport](./rest/satusehat-mapping/diagnostic-report.http) - [Original request](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>GET</code> [/satusehat/DiagnosticReport/:id](./rest/satusehat-mapping/diagnostic-report.http) - [Original request](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>PUT</code> [/satusehat/DiagnosticReport/:id](./rest/satusehat-mapping/diagnostic-report.http) - [Original request](./rest/satusehat-private/diagnostic-report.http)**
-   **<code>PATCH</code> [/satusehat/DiagnosticReport/:id](./rest/satusehat-mapping/diagnostic-report.http) - [Original request](./rest/satusehat-private/diagnostic-report.http)**

#### AllergyIntolerance

-   **<code>POST</code> [/satusehat/AllergyIntolerance](./rest/satusehat-mapping/allergy-intolerance.http) - [Original request](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>GET</code> [/satusehat/AllergyIntolerance](./rest/satusehat-mapping/allergy-intolerance.http) - [Original request](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>GET</code> [/satusehat/AllergyIntolerance/:id](./rest/satusehat-mapping/allergy-intolerance.http) - [Original request](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>PUT</code> [/satusehat/AllergyIntolerance/:id](./rest/satusehat-mapping/allergy-intolerance.http) - [Original request](./rest/satusehat-private/allergy-intolerance.http)**
-   **<code>PATCH</code> [/satusehat/AllergyIntolerance/:id](./rest/satusehat-mapping/allergy-intolerance.http) - [Original request](./rest/satusehat-private/allergy-intolerance.http)**

#### ClinicalImpression

-   **<code>POST</code> [/satusehat/ClinicalImpression](./rest/satusehat-mapping/clinical-impression.http) - [Original request](./rest/satusehat-private/clinical-impression.http)**
-   **<code>GET</code> [/satusehat/ClinicalImpression](./rest/satusehat-mapping/clinical-impression.http) - [Original request](./rest/satusehat-private/clinical-impression.http)**
-   **<code>GET</code> [/satusehat/ClinicalImpression/:id](./rest/satusehat-mapping/clinical-impression.http) - [Original request](./rest/satusehat-private/clinical-impression.http)**
-   **<code>PUT</code> [/satusehat/ClinicalImpression/:id](./rest/satusehat-mapping/clinical-impression.http) - [Original request](./rest/satusehat-private/clinical-impression.http)**
-   **<code>PATCH</code> [/satusehat/ClinicalImpression/:id](./rest/satusehat-mapping/clinical-impression.http) - [Original request](./rest/satusehat-private/clinical-impression.http)**

#### HealthcareService

-   **<code>POST</code> [/satusehat/HealthcareService](./rest/satusehat-mapping/healthcare-service.http) - [Original request](./rest/satusehat-private/healthcare-service.http)**
-   **<code>GET</code> [/satusehat/HealthcareService/:id](./rest/satusehat-mapping/healthcare-service.http) - [Original request](./rest/satusehat-private/healthcare-service.http)**
-   **<code>GET</code> [/satusehat/HealthcareService](./rest/satusehat-mapping/healthcare-service.http) - [Original request](./rest/satusehat-private/healthcare-service.http)**
-   **<code>PUT</code> [/satusehat/HealthcareService/:id](./rest/satusehat-mapping/healthcare-service.http) - [Original request](./rest/satusehat-private/healthcare-service.http)**
-   **<code>PATCH</code> [/satusehat/HealthcareService/:id](./rest/satusehat-mapping/healthcare-service.http) - [Original request](./rest/satusehat-private/healthcare-service.http)**

#### Appointment

-   **<code>POST</code> [/satusehat/Appointment](./rest/satusehat-mapping/appointment.http) - [Original request](./rest/satusehat-private/appointment.http)**
-   **<code>GET</code> [/satusehat/Appointment](./rest/satusehat-mapping/appointment.http) - [Original request](./rest/satusehat-private/appointment.http)**
-   **<code>GET</code> [/satusehat/Appointment/:id](./rest/satusehat-mapping/appointment.http) - [Original request](./rest/satusehat-private/appointment.http)**
-   **<code>PUT</code> [/satusehat/Appointment/:id](./rest/satusehat-mapping/appointment.http) - [Original request](./rest/satusehat-private/appointment.http)**
-   **<code>PATCH</code> [/satusehat/Appointment/:id](./rest/satusehat-mapping/appointment.http) - [Original request](./rest/satusehat-private/appointment.http)**

#### AppointmentResponse

-   **<code>POST</code> [/satusehat/AppointmentResponse](./rest/satusehat-mapping/appointment-response.http) - [Original request](./rest/satusehat-private/appointment-response.http)**
-   **<code>GET</code> [/satusehat/AppointmentResponse/:id](./rest/satusehat-mapping/appointment-response.http) - [Original request](./rest/satusehat-private/appointment-response.http)**
-   **<code>GET</code> [/satusehat/AppointmentResponse](./rest/satusehat-mapping/appointment-response.http) - [Original request](./rest/satusehat-private/appointment-response.http)**
-   **<code>PUT</code> [/satusehat/AppointmentResponse/:id](./rest/satusehat-mapping/appointment-response.http) - [Original request](./rest/satusehat-private/appointment-response.http)**
-   **<code>PATCH</code> [/satusehat/AppointmentResponse/:id](./rest/satusehat-mapping/appointment-response.http) - [Original request](./rest/satusehat-private/appointment-response.http)**

#### PractitionerRole

-   **<code>POST</code> [/satusehat/PractitionerRole](./rest/satusehat-mapping/practitioner-role.http) - [Original request](./rest/satusehat-private/practitioner-role.http)**
-   **<code>GET</code> [/satusehat/PractitionerRole/:id](./rest/satusehat-mapping/practitioner-role.http) - [Original request](./rest/satusehat-private/practitioner-role.http)**
-   **<code>GET</code> [/satusehat/PractitionerRole](./rest/satusehat-mapping/practitioner-role.http) - [Original request](./rest/satusehat-private/practitioner-role.http)**
-   **<code>PUT</code> [/satusehat/PractitionerRole/:id](./rest/satusehat-mapping/practitioner-role.http) - [Original request](./rest/satusehat-private/practitioner-role.http)**
-   **<code>PATCH</code> [/satusehat/PractitionerRole/:id](./rest/satusehat-mapping/practitioner-role.http) - [Original request](./rest/satusehat-private/practitioner-role.http)**

#### Slot

-   **<code>POST</code> [/satusehat/Slot](./rest/satusehat-mapping/slot.http) - [Original request](./rest/satusehat-private/slot.http)**
-   **<code>GET</code> [/satusehat/Slot/:id](./rest/satusehat-mapping/slot.http) - [Original request](./rest/satusehat-private/slot.http)**
-   **<code>PUT</code> [/satusehat/Slot/:id](./rest/satusehat-mapping/slot.http) - [Original request](./rest/satusehat-private/slot.http)**
-   **<code>PATCH</code> [/satusehat/Slot/:id](./rest/satusehat-mapping/slot.http) - [Original request](./rest/satusehat-private/slot.http)**

#### Immunization

-   **<code>GET</code> [/satusehat/Immunization](./rest/satusehat-mapping/immunization.http) - [Original request](./rest/satusehat-private/immunization.http)**
-   **<code>GET</code> [/satusehat/Immunization/:id](./rest/satusehat-mapping/immunization.http) - [Original request](./rest/satusehat-private/immunization.http)**
-   **<code>PUT</code> [/satusehat/Immunization/:id](./rest/satusehat-mapping/immunization.http) - [Original request](./rest/satusehat-private/immunization.http)**
-   **<code>PATCH</code> [/satusehat/Immunization/:id](./rest/satusehat-mapping/immunization.http) - [Original request](./rest/satusehat-private/immunization.http)**

#### ImagingStudy

-   **<code>POST</code> [/satusehat/ImagingStudy](./rest/satusehat-mapping/imaging-study.http) - [Original request](./rest/satusehat-private/imaging-study.http)**
-   **<code>GET</code> [/satusehat/ImagingStudy](./rest/satusehat-mapping/imaging-study.http) - [Original request](./rest/satusehat-private/imaging-study.http)**
-   **<code>PUT</code> [/satusehat/ImagingStudy/:id](./rest/satusehat-mapping/imaging-study.http) - [Original request](./rest/satusehat-private/imaging-study.http)**

#### EpisodeOfCare

-   **<code>POST</code> [/satusehat/EpisodeOfCare](./rest/satusehat-mapping/episode-of-care.http) - [Original request](./rest/satusehat-private/episode-of-care.http)**
-   **<code>GET</code> [/satusehat/EpisodeOfCare](./rest/satusehat-mapping/episode-of-care.http) - [Original request](./rest/satusehat-private/episode-of-care.http)**
-   **<code>GET</code> [/satusehat/EpisodeOfCare/:id](./rest/satusehat-mapping/episode-of-care.http) - [Original request](./rest/satusehat-private/episode-of-care.http)**
-   **<code>PUT</code> [/satusehat/EpisodeOfCare/:id](./rest/satusehat-mapping/episode-of-care.http) - [Original request](./rest/satusehat-private/episode-of-care.http)**
-   **<code>PATCH</code> [/satusehat/EpisodeOfCare/:id](./rest/satusehat-mapping/episode-of-care.http) - [Original request](./rest/satusehat-private/episode-of-care.http)**

#### CarePlan

-   **<code>POST</code> [/satusehat/CarePlan](./rest/satusehat-mapping/care-plan.http) - [Original request](./rest/satusehat-private/care-plan.http)**
-   **<code>GET</code> [/satusehat/CarePlan/:id](./rest/satusehat-mapping/care-plan.http) - [Original request](./rest/satusehat-private/care-plan.http)**
-   **<code>GET</code> [/satusehat/CarePlan](./rest/satusehat-mapping/care-plan.http) - [Original request](./rest/satusehat-private/care-plan.http)**
-   **<code>PUT</code> [/satusehat/CarePlan/:id](./rest/satusehat-mapping/care-plan.http) - [Original request](./rest/satusehat-private/care-plan.http)**
-   **<code>PATCH</code> [/satusehat/CarePlan/:id](./rest/satusehat-mapping/care-plan.http) - [Original request](./rest/satusehat-private/care-plan.http)**

#### FamilyMemberHistory

-   **<code>POST</code> [/satusehat/FamilyMemberHistory](./rest/satusehat-mapping/family-member-history.http) - [Original request](./rest/satusehat-private/family-member-history.http)**
-   **<code>GET</code> [/satusehat/FamilyMemberHistory/:id](./rest/satusehat-mapping/family-member-history.http) - [Original request](./rest/satusehat-private/family-member-history.http)**
-   **<code>GET</code> [/satusehat/FamilyMemberHistory](./rest/satusehat-mapping/family-member-history.http) - [Original request](./rest/satusehat-private/family-member-history.http)**
-   **<code>PUT</code> [/satusehat/FamilyMemberHistory/:id](./rest/satusehat-mapping/family-member-history.http) - [Original request](./rest/satusehat-private/family-member-history.http)**
-   **<code>PATCH</code> [/satusehat/FamilyMemberHistory/:id](./rest/satusehat-mapping/family-member-history.http) - [Original request](./rest/satusehat-private/family-member-history.http)**

#### QuestionnaireResponse

-   **<code>POST</code> [/satusehat/QuestionnaireResponse](./rest/satusehat-mapping/questionnaire-response.http) - [Original request](./rest/satusehat-private/questionnaire-response.http)**
-   **<code>PUT</code> [/satusehat/QuestionnaireResponse/:id](./rest/satusehat-mapping/questionnaire-response.http) - [Original request](./rest/satusehat-private/questionnaire-response.http)**
-   **<code>GET</code> [/satusehat/QuestionnaireResponse](./rest/satusehat-mapping/questionnaire-response.http) - [Original request](./rest/satusehat-private/questionnaire-response.http)**
-   **<code>GET</code> [/satusehat/QuestionnaireResponse/:id](./rest/satusehat-mapping/questionnaire-response.http) - [Original request](./rest/satusehat-private/questionnaire-response.http)**

#### ServiceRequest

-   **<code>POST</code> [/satusehat/ServiceRequest](./rest/satusehat-mapping/service-request.http) - [Original request](./rest/satusehat-private/service-request.http)**
-   **<code>GET</code> [/satusehat/ServiceRequest](./rest/satusehat-mapping/service-request.http) - [Original request](./rest/satusehat-private/service-request.http)**
-   **<code>GET</code> [/satusehat/ServiceRequest/:id](./rest/satusehat-mapping/service-request.http) - [Original request](./rest/satusehat-private/service-request.http)**
-   **<code>PUT</code> [/satusehat/ServiceRequest/:id](./rest/satusehat-mapping/service-request.http) - [Original request](./rest/satusehat-private/service-request.http)**
-   **<code>PATCH</code> [/satusehat/ServiceRequest/:id](./rest/satusehat-mapping/service-request.http) - [Original request](./rest/satusehat-private/service-request.http)**

#### Specimen

-   **<code>POST</code> [/satusehat/Specimen](./rest/satusehat-mapping/specimen.http) - [Original request](./rest/satusehat-private/specimen.http)**
-   **<code>PUT</code> [/satusehat/Specimen/:id](./rest/satusehat-mapping/specimen.http) - [Original request](./rest/satusehat-private/specimen.http)**
-   **<code>GET</code> [/satusehat/Specimen/:id](./rest/satusehat-mapping/specimen.http) - [Original request](./rest/satusehat-private/specimen.http)**
-   **<code>GET</code> [/satusehat/Specimen](./rest/satusehat-mapping/specimen.http) - [Original request](./rest/satusehat-private/specimen.http)**
-   **<code>PATCH</code> [/satusehat/Specimen/:id](./rest/satusehat-mapping/specimen.http) - [Original request](./rest/satusehat-private/specimen.http)**

#### RelatedPerson

-   **<code>POST</code> [/satusehat/RelatedPerson](./rest/satusehat-mapping/related-person.http) - [Original request](./rest/satusehat-private/related-person.http)**
-   **<code>PUT</code> [/satusehat/RelatedPerson/:id](./rest/satusehat-mapping/related-person.http) - [Original request](./rest/satusehat-private/related-person.http)**
-   **<code>GET</code> [/satusehat/RelatedPerson](./rest/satusehat-mapping/related-person.http) - [Original request](./rest/satusehat-private/related-person.http)**
-   **<code>PATCH</code> [/satusehat/RelatedPerson/:id](./rest/satusehat-mapping/related-person.http) - [Original request](./rest/satusehat-private/related-person.http)**

#### Patient

-   **<code>GET</code> [/satusehat/Patient](./rest/satusehat-mapping/patient.http) - [Original request](./rest/satusehat-private/patient.http)**
-   **<code>GET</code> [/satusehat/Patient/:id](./rest/satusehat-mapping/patient.http) - [Original request](./rest/satusehat-private/patient.http)**
-   **<code>POST</code> [/satusehat/Patient](./rest/satusehat-mapping/patient.http) - [Original request](./rest/satusehat-private/patient.http)**
