const express = require("express");
const router = express.Router();

let date = new Date().toDateString();

//Navigations routes
router.get("/", (req, res) => {
  res.render("index", {
    title: `Que tengo para hoy? - ${new Date().toDateString()}`,
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
