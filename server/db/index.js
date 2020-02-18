const mysql = require('mysql');

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASS = '';
const DB_NAME = 'mvp';

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

connection.connect(err => {
  if(err){
    console.log(err);
  } else {
    console.log('Database connected!');
  }
});
