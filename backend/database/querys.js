//Database querys
const pool = require("../database/dbConnection");

//Inserta nuevo paciente en la DB
async function insertIntoNewGuest(data) {
  try {
    const insertQuery = await pool.query(
      `INSERT INTO guest (dni,name,street,location,email,birthday,os) VALUES ('${
        data.dni
      }', '${data.name.toUpperCase()}', '${data.street.toUpperCase()}', '${data.location.toUpperCase()}', '${data.email.toUpperCase()}', '${data.birthday.toUpperCase()}', '${data.os.toUpperCase()}')`
    );
    return true;
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      console.error("puso dos veces enl mismo dni");
    }
    return error.code;
  }
}

module.exports = { insertIntoNewGuest };

//Function to receive an object an get back a query
/*
dataoObject = {
  typeQuery: "SELECT", or INSERT INTO or UPDATE or DELETE
  id: 546565 //is used to UPDATE or DELETE
  dni: 5465465,
  name: "Gustavo"
  ...and rest fields to send 
}
*/
newGuest = {
  typeQuery: "INSERT",
  id: "",
  dni: 101010000,
  name: "Felicitas Contreras",
  street: "Valle viejo al 4000",
  location: "Catamarca",
  email: "feli@nacion.com",
  os: "Nacion",
};

async function doQueryWithObject(dataoObject) {
  const keysObject = Object.keys(dataoObject);

  const typeQuery = keysObject[0];
  const id = keysObject[1];
  const lengthObject = keysObject.length();

  //Segun el tipo de query la ejecuta y si no hay error en finally retorna el data
  try {
    switch (typeQuery) {
      case "SELECT ALL":
        const data = await pool.query("SELECT * FROM guest");
        break;
      case "SELECT":
        break;
      case "INSERT":
        break;
      case "UPDATE":
        break;
      case "DELETE":
        break;
    }
  } catch (error) {
    console.log("Error en query ", error);
    const data = "";
  } finally {
    //TODO ver si se debe cerrar la conexion con la DB
    return data;
  }
}
