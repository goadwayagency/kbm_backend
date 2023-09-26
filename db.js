const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // Adjust the connection limit as needed
  queueLimit: 0,
});

console.log('Creating a connection pool...');

module.exports = pool.promise();
