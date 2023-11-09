const { createPool } = require("mysql");
const mssql = require('mssql');

const pool = createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  connectionLimit: 10
});

const sqlEncrypt = process.env.SQL_ENCRYPT === 'true';

const poolMSSql = new mssql.ConnectionPool({
  port: process.env.PORT,
  host: process.env.HOST,
  url: process.env.HOST_URL,
  sql: {
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DB,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    options: {
      encrypt: sqlEncrypt,
      enableArithAbort: true
    }
  }
})
module.exports = {
  pool,
  poolMSSql
}
