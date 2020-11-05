var mysql = require('mysql');
require("dotenv").config()
var pool  = mysql.createPool({
  connectionLimit : process.env.MYSQL_LIMIT,
  host            : process.env.MYSQL_HOST,
  user            : process.env.MYSQL_USER,
  password        : process.env.MYSQL_PASS,
  database        : process.env.MYSQL_DB
});

module.exports  = pool