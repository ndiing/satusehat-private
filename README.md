# Satusehat

Abiyosoft

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

http://localhost:3000/api

### Master

#### telecom

-   `post` /telecom
-   `get` /telecom
-   `patch` /telecom
-   `delete` /telecom

#### address

-   `post` /address
-   `get` /address
-   `patch` /address
-   `delete` /address

### HL7

-   `get` /CodeSystem-location-physical-type
-   `get` /CodeSystem-organization-type
-   `get` /CodeSystem-v3-ActCode
-   `get` /CodeSystem-v3-ParticipationType

### Satusehat Private

#### Practitioner

-   `get` /Practitioner
-   `get` /Practitioner/:id

#### Organization

-   `post` /Organization
-   `get` /Organization/:id
-   `get` /Organization
-   `put` /Organization/:id
-   `patch` /Organization/:id

#### Location

-   `post` /Location
-   `get` /Location
-   `get` /Location/:id
-   `put` /Location/:id
-   `patch` /Location/:id

#### Encounter

-   `post` /Encounter
-   `get` /Encounter/:id
-   `get` /Encounter
-   `put` /Encounter/:id
-   `patch` /Encounter/:id

#### Condition

-   `post` /Condition
-   `get` /Condition
-   `get` /Condition/:id
-   `put` /Condition/:id
-   `patch` /Condition/:id

#### Observation

-   `post` /Observation
-   `get` /Observation
-   `get` /Observation/:id
-   `put` /Observation/:id
-   `patch` /Observation/:id

#### Composition

-   `post` /Composition
-   `get` /Composition
-   `get` /Composition/:id
-   `put` /Composition/:id
-   `patch` /Composition/:id

#### Procedure

-   `post` /Procedure
-   `get` /Procedure
-   `get` /Procedure/:id
-   `put` /Procedure/:id
-   `patch` /Procedure/:id

#### Medication

-   `post` /Medication
-   `get` /Medication/:id
-   `put` /Medication/:id
-   `patch` /Medication/:id

#### MedicationRequest

-   `post` /MedicationRequest
-   `get` /MedicationRequest
-   `get` /MedicationRequest/:id
-   `put` /MedicationRequest/:id
-   `patch` /MedicationRequest/:id

#### MedicationDispense

-   `post` /MedicationDispense
-   `get` /MedicationDispense
-   `get` /MedicationDispense/:id
-   `put` /MedicationDispense/:id
-   `patch` /MedicationDispense/:id

#### DiagnosticReport

-   `post` /DiagnosticReport
-   `get` /DiagnosticReport
-   `get` /DiagnosticReport/:id
-   `put` /DiagnosticReport/:id
-   `patch` /DiagnosticReport/:id

#### AllergyIntolerance

-   `post` /AllergyIntolerance
-   `get` /AllergyIntolerance
-   `get` /AllergyIntolerance/:id
-   `put` /AllergyIntolerance/:id
-   `patch` /AllergyIntolerance/:id

#### ClinicalImpression

-   `post` /ClinicalImpression
-   `get` /ClinicalImpression
-   `get` /ClinicalImpression/:id
-   `put` /ClinicalImpression/:id
-   `patch` /ClinicalImpression/:id

#### HealthcareService

-   `post` /HealthcareService
-   `get` /HealthcareService/:id
-   `get` /HealthcareService
-   `put` /HealthcareService/:id
-   `patch` /HealthcareService/:id

#### Appointment

-   `post` /Appointment
-   `get` /Appointment
-   `get` /Appointment/:id
-   `put` /Appointment/:id
-   `patch` /Appointment/:id

#### AppointmentResponse

-   `post` /AppointmentResponse
-   `get` /AppointmentResponse/:id
-   `get` /AppointmentResponse
-   `put` /AppointmentResponse/:id
-   `patch` /AppointmentResponse/:id

#### PractitionerRole

-   `post` /PractitionerRole
-   `get` /PractitionerRole/:id
-   `get` /PractitionerRole
-   `put` /PractitionerRole/:id
-   `patch` /PractitionerRole/:id

#### Slot

-   `post` /Slot
-   `get` /Slot/:id
-   `put` /Slot/:id
-   `patch` /Slot/:id

#### Immunization

-   `get` /Immunization
-   `get` /Immunization/:id
-   `put` /Immunization/:id
-   `patch` /Immunization/:id

#### ImagingStudy

-   `post` /ImagingStudy
-   `get` /ImagingStudy
-   `put` /ImagingStudy/:id

#### EpisodeOfCare

-   `post` /EpisodeOfCare
-   `get` /EpisodeOfCare
-   `get` /EpisodeOfCare/:id
-   `put` /EpisodeOfCare/:id
-   `patch` /EpisodeOfCare/:id

#### CarePlan

-   `post` /CarePlan
-   `get` /CarePlan/:id
-   `get` /CarePlan
-   `put` /CarePlan/:id
-   `patch` /CarePlan/:id

#### FamilyMemberHistory

-   `post` /FamilyMemberHistory
-   `get` /FamilyMemberHistory/:id
-   `get` /FamilyMemberHistory
-   `put` /FamilyMemberHistory/:id
-   `patch` /FamilyMemberHistory/:id

#### QuestionnaireResponse

-   `post` /QuestionnaireResponse
-   `put` /QuestionnaireResponse/:id
-   `get` /QuestionnaireResponse
-   `get` /QuestionnaireResponse/:id

#### ServiceRequest

-   `post` /ServiceRequest
-   `get` /ServiceRequest
-   `get` /ServiceRequest/:id
-   `put` /ServiceRequest/:id
-   `patch` /ServiceRequest/:id

#### Specimen

-   `post` /Specimen
-   `put` /Specimen/:id
-   `get` /Specimen/:id
-   `get` /Specimen
-   `patch` /Specimen/:id

#### RelatedPerson

-   `post` /RelatedPerson
-   `put` /RelatedPerson/:id
-   `get` /RelatedPerson
-   `patch` /RelatedPerson/:id

#### Patient

-   `get` /Patient
-   `get` /Patient/:id
-   `post` /Patient

### Satusehat Mapping

#### Organization

-   **[`post` /v1/Organization]()**

#### Location

-   **[`post` /v1/Location]()**

#### Encounter

-   **[`post` /v1/Encounter]()**
