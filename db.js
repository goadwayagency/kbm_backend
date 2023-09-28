const mysql = require('mysql2');
require('dotenv').config();


const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DATABASE,
  password: process.env.KBM_PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // Adjust the connection limit as needed
  queueLimit: 0,
});

console.log(`${process.env.HOST}`)

console.log('Creating a connection pool...');

module.exports = pool.promise();
