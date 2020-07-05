const AuthCtrl = {};

//Con esto crearemos el token que se intercambiara entre el servidor y el usuario
const jwt = require("jsonwebtoken");
//Importamos el secret necesario para el token
const config = require("../config/config");

//Modelos
const Personal = require("../models/Personal");
const Alumno = require("../models/Alumno");
const Docente = require("../models/Docente");

//INICIO DE SESION PARA PERSONAL
AuthCtrl.signinPersonal = async (req, res) => {
  const { codigo, password } = req.body;

  const personal = await Personal.findOne({ dni: codigo });

  if (!personal) {
    return res.status(404).send("El codigo no existe");
  }

  if (personal.rol != "Personal") {
    return res.status(404).send("El rol no es correcto");
  }

  const validPassword = await personal.validarPassword(password);

  if (!validPassword) {
    return res.status(401).json({
      auth: false,
      token: null,
    });
  }

  const token = jwt.sign(
    { id: personal._id, rol: personal.rol },
    config.secret,
    {
      expiresIn: 60 * 60 * 24,
    }
  );

  res.json({
    auth: true,
    token: token,
  });
};

//INICIO DE SESION PARA ALUMNOS
AuthCtrl.signinAlumno = async (req, res) => {
  const { codigo, password } = req.body;

  const alumno = await Alumno.findOne({ codigo: codigo });

  if (!alumno) {
    return res.status(404).send("El codigo no existe");
  }

  if (alumno.rol != "Alumno") {
    return res.status(404).send("El rol no es correcto");
  }

  const validPassword = await alumno.validarPassword(password);

  if (!validPassword) {
    return res.status(401).json({
      auth: false,
      token: null,
    });
  }

  const token = jwt.sign({ id: alumno._id, rol: alumno.rol }, config.secret, {
    expiresIn: 60 * 60 * 24,
  });

  res.json({
    auth: true,
    token: token,
  });
};

//INICIO DE SESION PARA DOCENTES
AuthCtrl.signinDocente = async (req, res) => {
  const { codigo, password } = req.body;

  const docente = await Docente.findOne({ dni: codigo });

  if (!docente) {
    return res.status(404).send("El codigo no existe");
  }

  if (docente.rol != "Docente") {
    return res.status(404).send("El rol no es correcto");
  }

  const validPassword = await docente.validarPassword(password);

  if (!validPassword) {
    return res.status(401).json({
      auth: false,
      token: null,
    });
  }

  const token = jwt.sign({ id: docente._id, rol: docente.rol }, config.secret, {
    expiresIn: 60 * 60 * 24,
  });

  res.json({
    auth: true,
    token: token,
  });
};

module.exports = AuthCtrl;
