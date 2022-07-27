const controllers = {};
const pool = require("../database/dbConnection");

const {
  getCurrentDate,
} = require("../../public/scripts/utils/getCurrentDate.js");

let newGuestData = {};

//Navigations controllers
//Inicial page
controllers.index = (req, res) => {
  res.render("index", {
    title: `Que tengo para hoy? - ${getCurrentDate()}`,
  });
};

//Admin guest page
controllers.guest = (req, res) => {
  res.render("guest", {
    title: "Ingreso de nuevo paciente",
  });
};

//Admin task page
controllers.task = (req, res) => {
  res.render("task", {
    title: "Tareas y turnos",
  });
};

//API services

//Administracion de usuarios
//Muestra el paciente actual en "http://localhost:4000/api/newGuestDatatoDB"
controllers.getNewGuestData = async (req, res) => {
  const data = await pool.query("SELECT * FROM guest");
  res.send(JSON.stringify(data));
};

//Solicito nuevo paciente para enviar a la DB a "http://localhost:4000/api/newGuestDatatoDB"
controllers.postNewGuestData = (req, res) => {
  console.log("me mando un JSON");
  // console.log(req.body);
  newGuestData = req.body;
  res.send(JSON.stringify("LLego bala"));
};

//Administracion de eventos
//Envio eventos actuales para cargar la pagina de inicio "http://localhost:4000/api/currentsTasks"
controllers.getAllCurrentTasks = (res, req) => {
  console.log("te mando el array con las tareas");
};

//Solicito eventos actuales para mandar a la DB "http://localhost:4000/api/currentsTasks"
controllers.postAllCurrentTasks = (res, req) => {
  console.log("pido un array de eventos");
};

//Envio tarea actual "http://localhost:4000/api/currentTask"
controllers.getCurrentTask = (res, req) => {
  console.log("te mando un evento solo");
};

//Solicito nueva tarea para mandar a la DB "http://localhost:4000/api/currentTask"
controllers.postCurrentTask = (res, req) => {
  console.log("pido un evento solo");
};

module.exports = controllers;
