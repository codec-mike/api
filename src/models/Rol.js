const { Schema, model } = require("mongoose");

const rolSchema = new Schema(
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

module.exports = model("roles", rolSchema);
