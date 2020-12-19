// Update user and password
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'slonimal_db'
});

module.exports = db;