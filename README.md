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

-   **<code>get</code> /Practitioner**
-   **<code>get</code> /Practitioner/:id**

#### Organization

-   **<code>post</code> /Organization**
-   **<code>get</code> /Organization/:id**
-   **<code>get</code> /Organization**
-   **<code>put</code> /Organization/:id**
-   **<code>patch</code> /Organization/:id**

#### Location

-   **<code>post</code> /Location**
-   **<code>get</code> /Location**
-   **<code>get</code> /Location/:id**
-   **<code>put</code> /Location/:id**
-   **<code>patch</code> /Location/:id**

#### Encounter

-   **<code>post</code> /Encounter**
-   **<code>get</code> /Encounter/:id**
-   **<code>get</code> /Encounter**
-   **<code>put</code> /Encounter/:id**
-   **<code>patch</code> /Encounter/:id**

#### Condition

-   **<code>post</code> /Condition**
-   **<code>get</code> /Condition**
-   **<code>get</code> /Condition/:id**
-   **<code>put</code> /Condition/:id**
-   **<code>patch</code> /Condition/:id**

#### Observation

-   **<code>post</code> /Observation**
-   **<code>get</code> /Observation**
-   **<code>get</code> /Observation/:id**
-   **<code>put</code> /Observation/:id**
-   **<code>patch</code> /Observation/:id**

#### Composition

-   **<code>post</code> /Composition**
-   **<code>get</code> /Composition**
-   **<code>get</code> /Composition/:id**
-   **<code>put</code> /Composition/:id**
-   **<code>patch</code> /Composition/:id**

#### Procedure

-   **<code>post</code> /Procedure**
-   **<code>get</code> /Procedure**
-   **<code>get</code> /Procedure/:id**
-   **<code>put</code> /Procedure/:id**
-   **<code>patch</code> /Procedure/:id**

#### Medication

-   **<code>post</code> /Medication**
-   **<code>get</code> /Medication/:id**
-   **<code>put</code> /Medication/:id**
-   **<code>patch</code> /Medication/:id**

#### MedicationRequest

-   **<code>post</code> /MedicationRequest**
-   **<code>get</code> /MedicationRequest**
-   **<code>get</code> /MedicationRequest/:id**
-   **<code>put</code> /MedicationRequest/:id**
-   **<code>patch</code> /MedicationRequest/:id**

#### MedicationDispense

-   **<code>post</code> /MedicationDispense**
-   **<code>get</code> /MedicationDispense**
-   **<code>get</code> /MedicationDispense/:id**
-   **<code>put</code> /MedicationDispense/:id**
-   **<code>patch</code> /MedicationDispense/:id**

#### DiagnosticReport

-   **<code>post</code> /DiagnosticReport**
-   **<code>get</code> /DiagnosticReport**
-   **<code>get</code> /DiagnosticReport/:id**
-   **<code>put</code> /DiagnosticReport/:id**
-   **<code>patch</code> /DiagnosticReport/:id**

#### AllergyIntolerance

-   **<code>post</code> /AllergyIntolerance**
-   **<code>get</code> /AllergyIntolerance**
-   **<code>get</code> /AllergyIntolerance/:id**
-   **<code>put</code> /AllergyIntolerance/:id**
-   **<code>patch</code> /AllergyIntolerance/:id**

#### ClinicalImpression

-   **<code>post</code> /ClinicalImpression**
-   **<code>get</code> /ClinicalImpression**
-   **<code>get</code> /ClinicalImpression/:id**
-   **<code>put</code> /ClinicalImpression/:id**
-   **<code>patch</code> /ClinicalImpression/:id**

#### HealthcareService

-   **<code>post</code> /HealthcareService**
-   **<code>get</code> /HealthcareService/:id**
-   **<code>get</code> /HealthcareService**
-   **<code>put</code> /HealthcareService/:id**
-   **<code>patch</code> /HealthcareService/:id**

#### Appointment

-   **<code>post</code> /Appointment**
-   **<code>get</code> /Appointment**
-   **<code>get</code> /Appointment/:id**
-   **<code>put</code> /Appointment/:id**
-   **<code>patch</code> /Appointment/:id**

#### AppointmentResponse

-   **<code>post</code> /AppointmentResponse**
-   **<code>get</code> /AppointmentResponse/:id**
-   **<code>get</code> /AppointmentResponse**
-   **<code>put</code> /AppointmentResponse/:id**
-   **<code>patch</code> /AppointmentResponse/:id**

#### PractitionerRole

-   **<code>post</code> /PractitionerRole**
-   **<code>get</code> /PractitionerRole/:id**
-   **<code>get</code> /PractitionerRole**
-   **<code>put</code> /PractitionerRole/:id**
-   **<code>patch</code> /PractitionerRole/:id**

#### Slot

-   **<code>post</code> /Slot**
-   **<code>get</code> /Slot/:id**
-   **<code>put</code> /Slot/:id**
-   **<code>patch</code> /Slot/:id**

#### Immunization

-   **<code>get</code> /Immunization**
-   **<code>get</code> /Immunization/:id**
-   **<code>put</code> /Immunization/:id**
-   **<code>patch</code> /Immunization/:id**

#### ImagingStudy

-   **<code>post</code> /ImagingStudy**
-   **<code>get</code> /ImagingStudy**
-   **<code>put</code> /ImagingStudy/:id**

#### EpisodeOfCare

-   **<code>post</code> /EpisodeOfCare**
-   **<code>get</code> /EpisodeOfCare**
-   **<code>get</code> /EpisodeOfCare/:id**
-   **<code>put</code> /EpisodeOfCare/:id**
-   **<code>patch</code> /EpisodeOfCare/:id**

#### CarePlan

-   **<code>post</code> /CarePlan**
-   **<code>get</code> /CarePlan/:id**
-   **<code>get</code> /CarePlan**
-   **<code>put</code> /CarePlan/:id**
-   **<code>patch</code> /CarePlan/:id**

#### FamilyMemberHistory

-   **<code>post</code> /FamilyMemberHistory**
-   **<code>get</code> /FamilyMemberHistory/:id**
-   **<code>get</code> /FamilyMemberHistory**
-   **<code>put</code> /FamilyMemberHistory/:id**
-   **<code>patch</code> /FamilyMemberHistory/:id**

#### QuestionnaireResponse

-   **<code>post</code> /QuestionnaireResponse**
-   **<code>put</code> /QuestionnaireResponse/:id**
-   **<code>get</code> /QuestionnaireResponse**
-   **<code>get</code> /QuestionnaireResponse/:id**

#### ServiceRequest

-   **<code>post</code> /ServiceRequest**
-   **<code>get</code> /ServiceRequest**
-   **<code>get</code> /ServiceRequest/:id**
-   **<code>put</code> /ServiceRequest/:id**
-   **<code>patch</code> /ServiceRequest/:id**

#### Specimen

-   **<code>post</code> /Specimen**
-   **<code>put</code> /Specimen/:id**
-   **<code>get</code> /Specimen/:id**
-   **<code>get</code> /Specimen**
-   **<code>patch</code> /Specimen/:id**

#### RelatedPerson

-   **<code>post</code> /RelatedPerson**
-   **<code>put</code> /RelatedPerson/:id**
-   **<code>get</code> /RelatedPerson**
-   **<code>patch</code> /RelatedPerson/:id**

#### Patient

-   **<code>get</code> /Patient**
-   **<code>get</code> /Patient/:id**
-   **<code>post</code> /Patient**

### **[Satusehat Mapping]()**

API Satusehat (menggunakan payload mapping)

#### Organization

-   **<code>post</code> [/v1/Organization](./rest/satusehat-mapping/organization.http)** - [Create Organization](./docs/satusehat-mapping/organization.md)

#### Location

-   **<code>post</code> [/v1/Location](./rest/satusehat-mapping/location.http)** - [Create Location](./docs/satusehat-mapping/location.md)

#### Encounter

-   **<code>post</code> [/v1/Encounter](./rest/satusehat-mapping/encounter.http)** - [Create Encounter](./docs/satusehat-mapping/encounter.md)
