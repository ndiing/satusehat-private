### Location - Create

#### HTTP Request
**POST** `http://localhost:3000/api/satusehat/v1/Location`

#### Headers
| Key            | Value               |
|----------------|---------------------|
| Content-type   | application/json    |

#### Request Body
<pre>
{
    "identifier.0.value": "GT1-R-IGD-PONEK",
    "status": "active",
    "name": "Instalasi Gawat Darurat - PONEK",
    "description": "Ruang Tindakan Kegawatdaruratan, Lantai 1, Gedung Timur",
    "mode": "instance",
    "physicalType.coding.0.code": "ro",
    "position.longitude": -6.23115426275766,
    "position.latitude": 106.83239885393944,
    "position.altitude": 0,
    "Org_id": "5a90444d-01bd-405c-957b-6648a533132d"
}
</pre>

#### Request Body Fields
| Field                            | Type    | Description                                                                                  |
|----------------------------------|---------|----------------------------------------------------------------------------------------------|
| `identifier.0.value`             | String  | The identifier value for the location, e.g., "GT1-R-IGD-PONEK".                              |
| `status`                         | String  | The status of the location, e.g., "active".                                                 |
| `name`                           | String  | The name of the location.                                                                    |
| `description`                    | String  | The description of the location.                                                             |
| `mode`                           | String  | The mode of the location, e.g., "instance".                                                  |
| `physicalType.coding.0.code`    | String  | The code for the physical type of the location, e.g., "ro" for room.                         |
| `position.longitude`            | Float   | The longitude coordinate of the location.                                                    |
| `position.latitude`              | Float   | The latitude coordinate of the location.                                                     |
| `position.altitude`              | Float   | The altitude of the location.                                                                |
| `Org_id`                         | String  | The organization identifier associated with the location.                                     |

#### Example
<pre>
curl -X POST "http://localhost:3000/api/satusehat/v1/Location" \
     -H "Content-type: application/json" \
     -d '{
           "identifier.0.value": "GT1-R-IGD-PONEK",
           "status": "active",
           "name": "Instalasi Gawat Darurat - PONEK",
           "description": "Ruang Tindakan Kegawatdaruratan, Lantai 1, Gedung Timur",
           "mode": "instance",
           "physicalType.coding.0.code": "ro",
           "position.longitude": -6.23115426275766,
           "position.latitude": 106.83239885393944,
           "position.altitude": 0,
           "Org_id": "5a90444d-01bd-405c-957b-6648a533132d"
         }'
</pre>
