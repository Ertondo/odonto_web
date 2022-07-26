const app = require("./backend/config/server.js");
const colors = require("colors");
<<<<<<< HEAD
const app = express();
const routes = require("./backend/routes");

app.set("port", 3000);
app.set("views", path.join(__dirname, "./frontend/views"));
app.set("view engine", "ejs");

app.use("/", routes);

app.use(express.static(path.join(__dirname, "/public")));

app.listen(app.get("port"), () => {
  console.log(colors.bgGreen(`Server on port ${app.get("port")}`));
=======

//Pongo el servidor a funcionar
app.listen(process.env.PORT, () => {
  console.log(colors.bgGreen(`Server on port ${process.env.PORT}`));
>>>>>>> ff8d20e (created backend and frontend folders and i beginded with comunication betwen it to save data in db)
});
