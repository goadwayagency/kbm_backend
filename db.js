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

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
  // ... Use the connection for database operations
});

module.exports = pool.promise();
