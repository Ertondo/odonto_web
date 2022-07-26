const app = require("./backend/config/server.js");
const colors = require("colors");

//Pongo el servidor a funcionar
app.listen(process.env.PORT, () => {
  console.log(colors.bgGreen(`Server on port ${process.env.PORT}`));
});
