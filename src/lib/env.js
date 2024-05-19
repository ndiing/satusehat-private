const fs = require("fs");

let envString = "";

try {
    envString = fs.readFileSync("./.env", {
        encoding: "utf8",
    });
} catch (error) {
    envString += `# Konfigurasi untuk Port Layanan Web\r\n`
    envString += `port=3000\r\n`
    envString += `\r\n`
    envString += `# Konfigurasi Server Proxy\r\n`
    envString += `# Jika Anda menggunakan server proxy, aktifkan baris di atas dengan menghapus tanda pagar (#) di awal baris dan sesuaikan dengan alamat dan port server proxy Anda.\r\n`
    envString += `# proxy=http://127.0.0.1:8888\r\n`
    envString += `\r\n`
    envString += `# Kredensial Satusehat\r\n`
    envString += `# Kredensial yang diperlukan untuk mengautentikasi aplikasi dengan Satusehat.\r\n`
    envString += `# Pastikan kredensial ini tetap rahasia dan aman.\r\n`
    envString += `client_id=\r\n`
    envString += `client_secret=\r\n`
    envString += `organization_id=\r\n`
    

    fs.writeFileSync("./.env", envString);
}

for (const [, name, value] of envString.matchAll(/([^=\r\n]+)=([^\r\n]+)/g)) {
    // console.log({name,value})
    process.env[name] = value;
}
