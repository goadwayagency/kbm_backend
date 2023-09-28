const nodemailer = require('nodemailer');

// Create a Nodemailer transporter with PHPMailer
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    secure: true, 
    secureConnection: false,
    tls: {
        ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 465,
    debug: true,
    connectionTimeout: 10000,
    auth: {
        user: 'contact@kickboxingmorocco.club',
        pass: '1234@Kbm',
    },
});

module.exports = transporter;
