const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const alumnoSchema = new Schema(
  {
    primer_nombre: {
      type: String,
      required: true,
    },
    segundo_nombre: {
      type: String,
    },
    apellido_paterno: {
      type: String,
      required: true,
    },
    apellido_materno: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
    },
    dni: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
    fecha_nacimiento: {
      type: Date,
      required: true,
    },
    rol: {
      type: String,
      required: true,
      default: "Alumno",
    },
  },
  { timestamps: true }
);

alumnoSchema.methods.encriptarPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

alumnoSchema.methods.validarPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

alumnoSchema.methods.crearCodigo = function () {
  let codigo;
  let anio = new Date().getFullYear().toString().substr(-2);
  let numero = (Math.floor(Math.random() * (999 - 100)) + 100).toString();
  let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letra = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  codigo = anio + numero + letra;
  return codigo;
};

module.exports = model("alumno", alumnoSchema);
