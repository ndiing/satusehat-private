# SatuSehat Private

Welcome to the **SatuSehat Private** repository! This project is built using Node.js and provides several REST API examples to manage sessions in different ways.

## Table of Contents

- [Introduction](#introduction)
- [Developer Information](#developer-information)
- [Installation](#installation)
- [Usage](#usage)
- [Setting Up .env](#setting-up-env)
  - [satusehat-mapping](#satusehat-mapping)
  - [satusehat-private](#satusehat-private)
- [REST Examples](#rest-examples)
  - [satusehat-mapping](#satusehat-mapping)
  - [satusehat-private](#satusehat-private)
  - [satusehat-public](#satusehat-public)
  - [hl7](#hl7)
  - [master-address](#master-address)
  - [master-telecom](#master-telecom)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This repository contains Node.js based examples to demonstrate how to manage sessions for the SatuSehat application. Each example shows a different approach to handle session management with simplified payloads and environment settings.

## Developer Information

This project is developed by **Abiyosoft**, integrating FHIR with SatuSehat. For more information about SatuSehat, visit [SatuSehat](https://satusehat.kemkes.go.id/).

## Installation

To get started, clone the repository and install the dependencies:

<pre>
git clone https://github.com/ndiing/satusehat-private.git
cd satusehat-private
npm install
</pre>

## Usage

You can run each example separately to see how session management is handled in different scenarios. Below are the steps to run each example.

### Setting Up .env

Create a `.env` file in the root directory of `satusehat-mapping` or `satusehat-private` with the following content:

<pre>
# Konfigurasi untuk Port Layanan Web
port=3000

# Konfigurasi Server Proxy
# Jika Anda menggunakan server proxy, aktifkan baris di atas dengan menghapus tanda pagar (#) di awal baris dan sesuaikan dengan alamat dan port server proxy Anda.
# proxy=http://127.0.0.1:8888

# Kredensial Satusehat
# Kredensial yang diperlukan untuk mengautentikasi aplikasi dengan Satusehat.
# Pastikan kredensial ini tetap rahasia dan aman.
client_id=
client_secret=
organization_id=
</pre>

Replace the placeholders with your actual credentials and configuration values.

### Running the Application

For development, you can use `nodemon` to automatically restart the server on file changes:

<pre>
npm run dev
</pre>

This will run the command `nodemon src/index.js`.

To start the application in a production environment, use:

<pre>
npm start
</pre>

This will run the command `node src/index.js`.

### satusehat-mapping

This example demonstrates automatic session management with a simplified payload.


### satusehat-private

This example manages sessions automatically using environment settings.


### satusehat-public

This example manages each session individually.


## REST Examples

### satusehat-mapping

- **Description**: Demonstrates automatic session management with a simplified payload.
- **Path**: `./rest/satusehat-mapping`

### satusehat-private

- **Description**: Manages sessions automatically using environment settings.
- **Path**: `./rest/satusehat-private`

### satusehat-public

- **Description**: Manages each session individually.
- **Path**: `./rest/satusehat-public`

### hl7

- **Description**: Example REST API for HL7 integration.
- **Path**: `./rest/hl7.http`

### master-address

- **Description**: Example REST API for managing address data.
- **Path**: `./rest/master/address.http`

### master-telecom

- **Description**: Example REST API for managing telecom data.
- **Path**: `./rest/master/telecom.http`

## Contributing

Contributions are welcome! Please fork the repository and create a pull request to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or inquiries, please contact me at [ndiing.inc@gmail.com](mailto:ndiing.inc@gmail.com).

---

Happy coding! 😃
