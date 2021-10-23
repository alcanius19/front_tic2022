const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductosSchema = new Schema({
  descripcion: { type: String, required: true },
  valor_unit: { type: Number, required: true },
  estado: { type: Boolean, required: true },
  stock: { type: Number, required: true },
});

module.exports = mongoose.model("Productos", ProductosSchema, "productos");
