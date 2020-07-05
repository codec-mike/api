const PersonalCtrl = {};

const Personal = require("../models/Personal");

PersonalCtrl.getPersonales = async (req, res) => {
  const personales = await Personal.find();
  res.json(personales);
};

PersonalCtrl.createPersonal = async (req, res) => {
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

  const newPersonal = new Personal({
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

  newPersonal.codigo = await newPersonal.crearCodigo();

  newPersonal.password = await newPersonal.encriptarPassword(newPersonal.dni);

  await newPersonal.save();

  res.json({
    msg: "Personal creado correctamente",
  });
};

PersonalCtrl.getPersonal = async (req, res) => {
  const personal = await Personal.findById(req.params.id);
  res.json(personal);
};

PersonalCtrl.updatePersonal = async (req, res) => {
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

  const updatePersonal = new Personal({
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

  await Personal.findByIdAndUpdate(req.params.id, updatePersonal);

  res.json({
    msg: "Personal actualizado correctamente",
  });
};

PersonalCtrl.deletePersonal = async (req, res) => {
  await Personal.findByIdAndDelete(req.params.id);
  res.json({
    msg: "Personal eliminado correctamente",
  });
};

module.exports = PersonalCtrl;
