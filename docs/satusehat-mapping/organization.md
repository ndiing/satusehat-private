### Organization - Create

#### HTTP Request
**POST** `http://localhost:3000/api/satusehat/v1/Organization`

#### Headers
| Key            | Value               |
|----------------|---------------------|
| Content-type   | application/json    |

#### Request Body
<pre>
{
    "active": false,
    "identifier.0.use": "official",
    "identifier.0.value": "Pos Imunisasi",
    "type.0.coding.0.code": "dept",
    "name": "Pos Imunisasi"
}
</pre>

#### Request Body Fields
| Field                    | Type    | Description                                                        |
|--------------------------|---------|--------------------------------------------------------------------|
| `active`                 | Boolean | Indicates whether the organization is active or not.               |
| `identifier.0.use`       | String  | The use of the identifier, e.g., "official".                      |
| `identifier.0.value`     | String  | The value of the identifier for the organization.                  |
| `type.0.coding.0.code`   | String  | The code for the type of organization, e.g., "dept" for department.|
| `name`                   | String  | The name of the organization.                                      |

#### Example
<pre>
curl -X POST "http://localhost:3000/api/satusehat/v1/Organization" \
     -H "Content-type: application/json" \
     -d '{
           "active": false,
           "identifier.0.use": "official",
           "identifier.0.value": "Pos Imunisasi",
           "type.0.coding.0.code": "dept",
           "name": "Pos Imunisasi"
         }'
</pre>
