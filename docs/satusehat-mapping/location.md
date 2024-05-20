### Pembuatan Lokasi - Location

#### Permintaan HTTP
**POST** `http://localhost:3000/api/satusehat/v1/Location`

#### Header
| Key            | Value               |
|----------------|---------------------|
| Content-type   | application/json    |

#### Isi Permintaan
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

#### Field Permintaan
| Field                            | Tipe    | Deskripsi                                                                                       |
|----------------------------------|---------|-------------------------------------------------------------------------------------------------|
| `identifier.0.value`             | String  | Nilai pengenal untuk lokasi, contoh: "GT1-R-IGD-PONEK".                                        |
| `status`                         | String  | Status lokasi, contoh: "active".                                                                |
| `name`                           | String  | Nama lokasi.                                                                                    |
| `description`                    | String  | Deskripsi lokasi.                                                                               |
| `mode`                           | String  | Mode lokasi, contoh: "instance".                                                                |
| `physicalType.coding.0.code`    | String  | Kode untuk tipe fisik lokasi, contoh: "ro" untuk ruangan.                                       |
| `position.longitude`            | Float   | Koordinat garis bujur lokasi.                                                                   |
| `position.latitude`              | Float   | Koordinat garis lintang lokasi.                                                                 |
| `position.altitude`              | Float   | Ketinggian lokasi.                                                                              |
| `Org_id`                         | String  | Pengenal organisasi yang terkait dengan lokasi.                                                 |

Rujukan:
- `physicalType.coding.0.code` = [CodeSystem-location-physical-type](http://localhost:3000/api/hl7/CodeSystem-location-physical-type)

#### Contoh
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
