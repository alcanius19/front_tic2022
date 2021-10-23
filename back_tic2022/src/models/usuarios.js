const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    trim: true,
    required: true,
    max: 32
  },
  email: {
    type: String,
    trim:true,
    unique:true,
    lowercase: true,
    required: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
  rol: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
module.exports = model("Usuario", UsuarioSchema);
