const { Schema, model } = require("mongoose");

const RolesSchema = Schema({
  rol_id: {
    type: Number,
    required: true,
  },
  rol_nombre: {
    type: String,
    required: true,
  },
});

module.exports = model("Roles", RolesSchema);
