const mongoose = require("mongoose");
const { Schema } = mongoose;

const VentasSchema = new Schema({
  codigo: { type: String, required: true },
  cliente: { type: String, required: true },
  cedula: { type: Number, required: true },
  id_vendedor: { type: String, required: true },
  descripcion: { type: String, default: "" },
  estado: { type: String, required: true },
  fecha_venta: { type: Date, default: Date.now },
  productos: { type: Array, required: true },
  total: { type: Number, required: true },
});

module.exports = mongoose.model("Ventas", VentasSchema, "ventas");
