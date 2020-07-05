const DocenteCtrl = {};

const Docente = require("../models/Docente");

DocenteCtrl.getDocentes = async (req, res) => {
  const docentes = await Docente.find();
  res.json(docentes);
};
DocenteCtrl.createDocente = async (req, res) => {
  const {
    primer_nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    dni,
    correo,
    fecha_nacimiento,
    direccion,
    telefono,
    rol,
  } = req.body;

  const newDocente = new Docente({
    primer_nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    codigo: "",
    dni,
    password: "",
    correo,
    fecha_nacimiento,
    direccion,
    telefono,
    rol,
  });

  newDocente.codigo = await newDocente.crearCodigo();

  newDocente.password = await newDocente.encriptarPassword(newDocente.dni);

  await newDocente.save();

  res.json({
    msg: "Docente creado correctamente",
  });
};

DocenteCtrl.getDocente = async (req, res) => {
  const docente = await Docente.findById(req.params.id);
  res.json(docente);
};

DocenteCtrl.updateDocente = async (req, res) => {
  const {
    primer_nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    dni,
    correo,
    fecha_nacimiento,
    direccion,
    telefono,
    rol,
  } = req.body;

  const updateDocente = new Docente({
    primer_nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    dni,
    correo,
    fecha_nacimiento,
    direccion,
    telefono,
    rol,
  });

  await Docente.findByIdAndUpdate(req.params.id, updateDocente);

  res.json({
    msg: "Docente actualizado correctamente",
  });
};

DocenteCtrl.deleteDocente = async (req, res) => {
  await Docente.findByIdAndDelete(req.params.id);
  res.json({
    msg: "Docente eliminado correctamente",
  });
};

module.exports = DocenteCtrl;
