const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const personalSchema = new Schema(
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
    direccion: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
      default: "Personal",
    },
  },
  { timestamps: true }
);

personalSchema.methods.encriptarPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

personalSchema.methods.validarPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

personalSchema.methods.crearCodigo = function () {
  let codigo;
  let anio = new Date().getFullYear().toString().substr(-2);
  let numero = (Math.floor(Math.random() * (99 - 10)) + 10).toString();
  let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letra = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  codigo = "E" + anio + numero + letra;
  return codigo;
};

module.exports = model("personales", personalSchema);
