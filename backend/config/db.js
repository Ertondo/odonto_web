//Datos de conexion

module.exports = {
  dbGuest: {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "odontoweb",
  },
};
