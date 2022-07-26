const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const bodyParser = require("body-parser");
require("dotenv").config();

//Defino las vistas de la pagina y el motor de plantillas EJS
app.set("views", path.join(__dirname, "../../frontend/views"));
app.set("view engine", "ejs");

app.use(cors());
//Body parser sirve para parsear el req.body y poder recibir json
app.use(bodyParser.json({ type: "*/*" }));
app.use(bodyParser.urlencoded({ extended: false }));

//Le pido que use un archivo con las rutas
app.use(require("../routes/index.routes"));

//Defino una carpeta con archivos de uso publico
app.use(express.static(path.join(__dirname, "../../public")));

//Si intento ingresar a una direccion incorrecta...404
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../public/404.html"));
});

//Exporto app para que funcione el servidor
module.exports = app;
