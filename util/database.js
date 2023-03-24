const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: 'j0j0i55iMySQL',
});

module.exports = pool.promise();
