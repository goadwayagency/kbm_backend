const mysql = require('mysql2');
require('dotenv').config();


const pool = mysql.createPool({
  host: 'srv659.hstgr.io',
  user: 'u861150053_kbmorocco',
  password: '1234@Kbm',
  database: 'u861150053_kbmorocco',
  waitForConnections: true,
  connectionLimit: 10, // Adjust the connection limit as needed
  queueLimit: 0,
});

console.log(`${process.env.HOST}`)

console.log('Creating a connection pool...');

module.exports = pool.promise();
