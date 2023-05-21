const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "next",
  password: "katlosyeva",
});

module.exports = pool.promise();
