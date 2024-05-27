# SatuSehat Integration with FHIR

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

This repository demonstrates the integration of FHIR with SatuSehat, developed by Abiyosoft. This project aims to facilitate the seamless integration and interaction between healthcare applications and the SatuSehat platform using the FHIR standard.

## Table of Contents

- [Repositories](#repositories)
- [Contact](#contact)
- [Downloads](#downloads)
  - [Windows](#windows)
  - [Linux and macOS](#linux-and-macos)
- [Node.js Setup](#nodejs-setup)
  - [Download and Install Node.js](#download-and-install-nodejs)
  - [Clone the Project](#clone-the-project)
  - [Install Project Dependencies](#install-project-dependencies)
  - [Run the Project](#run-the-project)
- [Example Requests](#example-requests)
  - [Manual Session (satusehat-public)](#manual-session-satusehat-public)
    - [Organization - Create](#organization---create)
  - [Automated Session (satusehat-private)](#automated-session-satusehat-private)
    - [Configure .env](#configure-env)
    - [Organization - Create](#organization---create)
  - [SatuSehat-Mapping](#satusehat-mapping)
    - [Organization - Create (Simplified Payload)](#organization---create-simplified-payload)
- [REST Examples](#rest-examples)
  - [HL7](#hl7)
  - [Master](#master)
    - [Address](#address)
    - [Telecomm](#telecomm)
  - [SatuSehat](#satusehat)
    - [Public](#public)
    - [Private](#private)
    - [Mapping](#mapping)
- [License](#license)

## Repositories

- **Public Repository:** [satusehat-public](https://github.com/ndiing/satusehat-public)
- **Private Repository:** [satusehat-private](https://github.com/ndiing/satusehat-private)

## Contact

- **GitHub Username:** ndiing
- **Email:** ndiing.inc@gmail.com

## Downloads

### Windows

[Download](https://github.com/ndiing/satusehat-public/releases)

### Linux and macOS

We cannot build for Linux and macOS due to the lack of available devices. Please use a Node.js environment to run the application.

## Node.js Setup

### Download and Install Node.js

[Download](https://nodejs.org/dist/v20.13.1/node-v20.13.1-x64.msi) and install Node.js on your computer.

### Clone the Project

```bash
git clone https://github.com/ndiing/satusehat-private.git
```

### Install Project Dependencies

```bash
cd satusehat-private
npm install
```

### Run the Project

```bash
npm run dev
# or
npm run start
```

## Example Requests

### Manual Session (satusehat-public)

#### Organization - Create

```http
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
```

### Automated Session (satusehat-private)

#### Configure .env

Open the `.env` file and set the following configurations:

```bash
# Web Service Port Configuration
port=3000

# Proxy Server Configuration
proxy=http://127.0.0.1:8888

# SatuSehat Credentials
client_id=
client_secret=
organization_id=
```

#### Organization - Create

```http
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
```

### SatuSehat-Mapping

#### Organization - Create (Simplified Payload)

```http
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
```

## REST Examples

### HL7

```http
./rest/hl7.http
```

### Master

#### Address

```http
./rest/master/address.http
```

#### Telecomm

```http
./rest/master/telecomm.http
```

### SatuSehat

#### Public

```http
./rest/satusehat-public/*.http
```

#### Private

```http
./rest/satusehat-private/*.http
```

#### Mapping

```http
./rest/satusehat-mapping/*.http
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
