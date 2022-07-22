const express = require("express");
const path = require("path");
const cors = require("cors");
const colors = require("colors");
const app = express();
const routes = require("./backend/routes");

app.set("port", 3000);
app.set("views", path.join(__dirname, "./frontend/views"));
app.set("view engine", "ejs");

app.use("/", routes);

app.use(express.static(path.join(__dirname, "/public")));

app.listen(app.get("port"), () => {
  console.log(colors.bgGreen(`Server on port ${app.get("port")}`));
});
