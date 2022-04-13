const mysql = require('mysql2');

// Option 2: Passing a connection URI
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'animalsplanet',
});

connection.connect(function (err) {
  if (err) {
    console.log({ err });
  }
  console.log('Database is connected successfully!');
});

module.exports = connection;
