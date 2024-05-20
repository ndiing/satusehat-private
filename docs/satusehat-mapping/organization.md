### Pembuatan Organisasi - Organization

#### Permintaan HTTP
**POST** `http://localhost:3000/api/satusehat/v1/Organization`

#### Header
| Key            | Value               |
|----------------|---------------------|
| Content-type   | application/json    |

#### Isi Permintaan
<pre>
{
    "active": false,
    "identifier.0.use": "official",
    "identifier.0.value": "Pos Imunisasi",
    "type.0.coding.0.code": "dept",
    "name": "Pos Imunisasi"
}
</pre>

#### Field Permintaan
| Field                    | Tipe    | Deskripsi                                                        |
|--------------------------|---------|------------------------------------------------------------------|
| `active`                 | Boolean | Menunjukkan apakah organisasi aktif atau tidak.                  |
| `identifier.0.use`       | String  | Penggunaan pengenal, contoh: "official".                         |
| `identifier.0.value`     | String  | Nilai pengenal untuk organisasi.                                 |
| `type.0.coding.0.code`   | String  | Kode untuk jenis organisasi, contoh: "dept" untuk departemen.    |
| `name`                   | String  | Nama organisasi.                                                |

Rujukan:
- `type.0.coding.0.code` = [CodeSystem-organization-type](http://localhost:3000/api/hl7/CodeSystem-organization-type)

#### Contoh
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
