# Pembuatan Pertemuan - Encounter

### Permintaan HTTP
**POST** `http://localhost:3000/api/satusehat/v1/Encounter`

### Header
| Key          | Value                |
|--------------|----------------------|
| Content-type | application/json     |

### Isi Permintaan
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

### Field Permintaan
| Field                                      | Tipe    | Deskripsi                                                                                       |
|--------------------------------------------|---------|-------------------------------------------------------------------------------------------------|
| `status`                                   | String  | Status pertemuan, contoh: "arrived".                                                            |
| `class.code`                               | String  | Kode kelas pertemuan, contoh: "AMB" untuk ambulans.                                             |
| `Patient_nik`                              | String  | NIK (Nomor Identifikasi Nasional) pasien.                                                       |
| `participant.0.type.0.coding.0.code`       | String  | Kode untuk jenis peserta, contoh: "ATND" untuk yang hadir.                                      |
| `Practitioner_nik`                         | String  | NIK praktisi yang terlibat.                                                                     |
| `period.start`                             | String  | Waktu mulai periode pertemuan dalam format ISO 8601.                                            |
| `Location_id`                              | String  | Pengenal lokasi, contoh: "GT1-R-IGD-PONEK".                                                     |
| `statusHistory.0.status`                   | String  | Status entri riwayat status, contoh: "arrived".                                                 |
| `statusHistory.0.period.start`             | String  | Waktu mulai periode entri riwayat status dalam format ISO 8601.                                 |
| `Org_id`                                   | String  | Pengenal organisasi, contoh: "5a90444d-01bd-405c-957b-6648a533132d".                            |
| `identifier.0.value`                       | String  | Pengenal pertemuan, contoh: "P20240001".                                                        |

Rujukan:
- `class.code` = [CodeSystem-v3-ActCode](http://localhost:3000/api/hl7/CodeSystem-v3-ActCode)
- `participant.0.type.0.coding.0.code` = [CodeSystem-v3-ParticipationType](http://localhost:3000/api/hl7/CodeSystem-v3-ParticipationType)

### Contoh
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
