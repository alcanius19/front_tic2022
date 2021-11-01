const { json } = require("express");
const express = require("express");
const { reset } = require("nodemon");
// DEVUELVE UN OBJETO EN EL CUAL ME PERMITE INGRESAR RUTAS
const router = express.Router();
// lo importo para hacer consultas
const Productos = require("../models/productos");
// DEFINIR RUTAS DESDE EL SERVIDOR api

router.get("/", async (req, res) => {
  const productos = await Productos.find();
  console.log(productos);
  res.json(productos);
});

router.get("/:id", async (req, res) => {
  try {
    const productos = await Productos.findById(req.params.id);
    res.status(201).json({
      status: "informacion del producto :",
      res: productos,
    });
    //res.status(201).json(productos);
  } catch (err) {
    console.log(err);
    res.status(201).json({
      status: "No encontrado.",
    });
  }
});

router.get("/descripcion/:desc", async (req, res, next) => {
  const productos = await Productos.find()
    .where("descripcion")
    .equals(req.params.desc);

  console.log(productos);
  res.json(productos);
});

router.put("/:id", async (req, res) => {
  const { descripcion, valor_unit, estado, stock } = req.body;
  const producto = {
    descripcion,
    valor_unit,
    estado,
    stock,
  };
  await Productos.findByIdAndUpdate(req.params.id, producto);
  res.json({ status: "Producto Actualizado" });
});

router.post("/", async (req, res) => {
  try {
    const { descripcion, valor_unit, estado, stock } = req.body;
    const producto = new Productos({
      descripcion,
      valor_unit,
      estado,
      stock,
    });
    await producto.save();
    res.status(201).json({
      status: "Guardado Correctamente",
      res: producto,
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  await Productos.findByIdAndRemove(req.params.id);
  res.json({ status: "eliminado" });
});

module.exports = router;
