const AlumnoCtrl = {};

const Alumno = require("../models/Alumno");

AlumnoCtrl.getAlumnos = async (req, res) => {
  const alumnos = await Alumno.find();
  res.json(alumnos);
};

AlumnoCtrl.createAlumno = async (req, res) => {
  const {
    primer_nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    dni,
    correo,
    fecha_nacimiento,
    rol,
  } = req.body;

  const newAlumno = new Alumno({
    primer_nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    codigo: "",
    dni,
    password: "",
    correo,
    fecha_nacimiento,
    rol,
  });

  newAlumno.codigo = await newAlumno.crearCodigo();

  newAlumno.password = await newAlumno.encriptarPassword(newAlumno.dni);

  await newAlumno.save();

  res.json({
    msg: "Alumno creado correctamente",
  });
};

AlumnoCtrl.getAlumno = async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  res.json(alumno);
};

AlumnoCtrl.updateAlumno = async (req, res) => {
  const {
    primer_nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    dni,
    correo,
    fecha_nacimiento,
    rol,
  } = req.body;

  const updateAlumno = new Alumno({
    primer_nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    dni,
    correo,
    fecha_nacimiento,
    rol,
  });

  await Alumno.findByIdAndUpdate(req.params.id, updateAlumno);

  res.json({
    msg: "Alumno actualizado correctamente",
  });
};

AlumnoCtrl.deleteAlumno = async (req, res) => {
  await Alumno.findByIdAndDelete(req.params.id);
  res.json({
    msg: "Alumno eliminado correctamente",
  });
};

module.exports = AlumnoCtrl;
