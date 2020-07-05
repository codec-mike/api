const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

//Base de datos
require("./database/database");

//Configuraciones
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));

//Rutas
app.use(require("./routes/routes"));

//Llamando al servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
