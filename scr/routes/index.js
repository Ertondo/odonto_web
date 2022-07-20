const express = require("express");
const router = express.Router();
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

//Navigations routes
router.get("/", (req, res) => {
  res.render("index", {
    title: `Que tengo para hoy? - ${date.getDate()} de ${
      meses[date.getMonth()]
    } de ${date.getFullYear()}`,
  });
});

router.get("/guest", (req, res) => {
  res.render("guest", {
    title: "Ingreso de nuevo paciente",
  });
});

router.get("/task", (req, res) => {
  res.render("task", {
    title: "Tareas y turnos",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "Gustavo",
  });
});

//Data routes

module.exports = router;
