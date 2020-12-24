// Update user and password
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql123!',
  database: 'slonimal_db'
});

module.exports = db;