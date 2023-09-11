const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  database: 'viniport-servicos',
  password: '#Re902570',
  multipleStatements:true
});

module.exports = connection