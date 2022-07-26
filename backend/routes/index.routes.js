const express = require("express");
const router = express.Router();
const controllers = require("../controllers/index.controllers");
const {
  getCurrentDate,
} = require("../../public/scripts/utils/getCurrentDate.js");

let newGuestData = {};

//Navigations routes
//Inicial page
router.get("/", controllers.index);

//Admin guest page
router.get("/guest", controllers.guest);

//Admin task page
router.get("/task", controllers.task);

//API services

// //Administracion de usuarios

router.get("/api/newGuestDatatoDB", controllers.getNewGuestData);
router.post("/api/newGuestDatatoDB", controllers.postNewGuestData);

//Administracion de eventos
//Evento actual
router.get("/api/currentTask", controllers.getCurrentTask);
router.post("/api/currentTask", controllers.postCurrentTask);

//Todos los eventos
router.get("/api/currentsTasks", controllers.getAllCurrentTasks);
router.post("/api/currentsTasks", controllers.postAllCurrentTasks);

module.exports = router;
