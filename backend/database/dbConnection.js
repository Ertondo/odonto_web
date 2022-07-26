const mysql = require("mysql");
//Desde util traigo promisify para poder usar callbacks en ves de .then ya que Node no las soporta
const { promisify } = require("util");

const { dbGuest } = require("../config/db");

const pool = mysql.createPool(dbGuest);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("DATABASE CONNECTION WAS LOST");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("DATABASE HAS TO MANY CONNECTIONS");
    }
    if (err.code === "ECONREFUSED") {
      console.error("DATABASE CONNECTION WAS REFUSED");
    }
  }
  if (connection) connection.release();
  console.log("DB is connected");
  return;
});

//Permite usar callbacks y async/await
pool.query = promisify(pool.query);

module.exports = pool;
