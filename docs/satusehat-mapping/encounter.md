# Encounter - Create

### HTTP Request
**POST** `http://localhost:3000/api/satusehat/v1/Encounter`

### Headers
| Key          | Value                |
|--------------|----------------------|
| Content-type | application/json     |

### Request Body
<pre>
{
    "status": "arrived",
    "class.code": "AMB",
    "Patient_nik": "3501041605910002",
    "participant.0.type.0.coding.0.code": "ATND",
    "Practitioner_nik": "3515146112900002",
    "period.start": "2022-06-14T07:00:00+07:00",
    "Location_id": "GT1-R-IGD-PONEK",
    "statusHistory.0.status": "arrived",
    "statusHistory.0.period.start": "2022-06-14T07:00:00+07:00",
    "Org_id": "5a90444d-01bd-405c-957b-6648a533132d",
    "identifier.0.value": "P20240001"
}
</pre>

### Request Body Fields
| Field                                      | Type   | Description                                                                                      |
|--------------------------------------------|--------|--------------------------------------------------------------------------------------------------|
| `status`                                   | String | The status of the encounter, e.g., "arrived".                                                    |
| `class.code`                               | String | The class code of the encounter, e.g., "AMB" for ambulance.                                      |
| `Patient_nik`                              | String | The NIK (National Identification Number) of the patient.                                         |
| `participant.0.type.0.coding.0.code`       | String | The code for the type of participant, e.g., "ATND" for attending.                                |
| `Practitioner_nik`                         | String | The NIK of the practitioner.                                                                     |
| `period.start`                             | String | The start time of the encounter period in ISO 8601 format.                                       |
| `Location_id`                              | String | The identifier of the location, e.g., "GT1-R-IGD-PONEK".                                         |
| `statusHistory.0.status`                   | String | The status history entry status, e.g., "arrived".                                                |
| `statusHistory.0.period.start`             | String | The start time of the status history entry period in ISO 8601 format.                            |
| `Org_id`                                   | String | The organization identifier, e.g., "5a90444d-01bd-405c-957b-6648a533132d".                       |
| `identifier.0.value`                       | String | The encounter identifier, e.g., "P20240001".                                                     |

### Example
<pre>
curl -X POST "http://localhost:3000/api/satusehat/v1/Encounter" \
     -H "Content-type: application/json" \
     -d '{
           "status": "arrived",
           "class.code": "AMB",
           "Patient_nik": "3501041605910002",
           "participant.0.type.0.coding.0.code": "ATND",
           "Practitioner_nik": "3515146112900002",
           "period.start": "2022-06-14T07:00:00+07:00",
           "Location_id": "GT1-R-IGD-PONEK",
           "statusHistory.0.status": "arrived",
           "statusHistory.0.period.start": "2022-06-14T07:00:00+07:00",
           "Org_id": "5a90444d-01bd-405c-957b-6648a533132d",
           "identifier.0.value": "P20240001"
         }'
</pre>
