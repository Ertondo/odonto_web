const express = require("express");
const router = express.Router();

//To show dates in nice form
const meses = new Array(
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
);
let date = new Date();

// Connect to mariaDB
const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "localhost",
  user: "erto",
  password: "erto",
  connectionLimit: 5,
});

//Navigations routes
//Inicial page
router.get("/", (req, res) => {
  res.render("index", {
    title: `Que tengo para hoy? - ${date.getDate()} de ${
      meses[date.getMonth()]
    } de ${date.getFullYear()}`,
  });
});

//Admin guest page
router.get("/guest", (req, res) => {
  res.render("guest", {
    title: "Ingreso de nuevo paciente",
  });
});

//Admin task page
router.get("/task", (req, res) => {
  res.render("task", {
    title: "Tareas y turnos",
  });
});

//Probando funciones de res
router.get("/newGuest", (req, res) => {
  res.redirect("/img/logo_corr.ico");
});

//Solicito nuevo paciente para enviar a la DB
router.post("/newGuestDatatoDB", (req, res) => {
  console.log("me mando un JSON");
  console.log(req.body);
  res.send(JSON.stringify("LLego bala"));
});

//Test to connect mariaDB
router.get("/test", (req, res) => {
  res.writeHead(200, { ContentType: "text/html" });
  res.end("test OK");
});

module.exports = router;
