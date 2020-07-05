const { Schema, model } = require("mongoose");

const permisoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
    },
    estado: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = model("permisos", permisoSchema);
