## download untuk windows
[download](https://github.com/ndiing/satusehat-public/releases)

## linux dan macos
untuk linux dan macos tidak bisa kami build, tidak ada device yang digunakan,
gunakan node enviroment untuk menjalankan

### nodejs

#### download nodejs dan install
[download](https://nodejs.org/dist/v20.13.1/node-v20.13.1-x64.msi) dan install ke komputer

#### clone project
<pre>
git clone https://github.com/ndiing/satusehat-private.git
</pre>

#### install project
<pre>
cd satusehat-private
npm i
</pre>

#### jalankan project
<pre>
npm run dev
# atau
npm run start
</pre>

## contoh request (sesi manual)


### satusehat-public
contoh request menggunakan multi sesi

<pre>

### Organization - Create
POST http://localhost:3000/api/satusehat/Organization
Authorization: Bearer {{token}}
Content-type: application/json

{
    "resourceType": "Organization",
    "active": true,
    "identifier": [
        {
            "use": "official",
            "system": "http://sys-ids.kemkes.go.id/organization/1000079374",
            "value": "Pos Imunisasi LUBUK BATANG"
        }
    ],
    "type": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/organization-type",
                    "code": "dept",
                    "display": "Hospital Department"
                }
            ]
        }
    ],
    "name": "Pos Imunisasi",
    "partOf": {
        "reference": "Organization/{{Org_id}}"
    }
}
</pre>

## contoh request (sesi otomatis)

### mengatur .env
buka .env lalu sesuaikan settingan
<pre>
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
</pre>

### satusehat-private
contoh request menggunakan sesi otomatis

<pre>
### Organization - Create
POST http://localhost:3000/api/satusehat/Organization
Content-type: application/json

{
    "resourceType": "Organization",
    "active": true,
    "identifier": [
        {
            "use": "official",
            "system": "http://sys-ids.kemkes.go.id/organization/1000079374",
            "value": "Pos Imunisasi LUBUK BATANG"
        }
    ],
    "type": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/organization-type",
                    "code": "dept",
                    "display": "Hospital Department"
                }
            ]
        }
    ],
    "name": "Pos Imunisasi",
    "partOf": {
        "reference": "Organization/{{Org_id}}"
    }
}
</pre>

### satusehat-mapping
contoh request menggunakan sesi otomatis, dengan payload yang di sederhanakan

<pre>
### Organization - Create
POST http://localhost:3000/api/satusehat/Organization
Content-type: application/json

{
    "resourceType": "Organization",
    "active": true,
    "identifier.0.use": "official",
    "identifier.0.system": "http://sys-ids.kemkes.go.id/organization/1000079374",
    "identifier.0.value": "Pos Imunisasi LUBUK BATANG",
    "type.0.coding.0.system": "http://terminology.hl7.org/CodeSystem/organization-type",
    "type.0.coding.0.code": "dept",
    "type.0.coding.0.display": "Hospital Department",
    "name": "Pos Imunisasi",
    "partOf.reference": "Organization/{{Org_id}}"
}
</pre>