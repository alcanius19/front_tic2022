const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const { mongoose } = require("./database");
const cors = require("cors");
// configura las rutas
const path = require("path");

const app = express();

// Db connection

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(morgan("dev"));
// PERMITE ENVIAR DATOS EN FORMATO JSON
app.use(express.json());
app.use(cors());

const productos = require(path.join(__dirname, "/routes/productos.routes.js"));
const ventas = require(path.join(__dirname, "/routes/ventas.routes.js"));
const usuarios = require(path.join(__dirname, "/routes/usuarios.routes.js"));
// Routes

app.use("/api/productos", productos);
app.use("/api/ventas", ventas);
app.use("/api/usuarios", usuarios);


// Static Files
app.use(express.static(path.join(__dirname, "public/login")));

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
