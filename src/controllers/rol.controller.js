const RolCtrl = {};

const Rol = require("../models/Rol");

RolCtrl.getRoles = async (req, res) => {
  const roles = await Rol.find();
  res.json(roles);
};

RolCtrl.createRol = async (req, res) => {
  const { nombre, estado } = req.body;

  const newRol = new Rol({
    nombre,
    estado,
  });

  await newRol.save();

  res.json({
    msg: "Rol creado correctamente",
  });
};

RolCtrl.getRol = async (req, res) => {
  const rol = await Rol.findById(req.params.id);
  res.json(rol);
};

RolCtrl.updateRol = async (req, res) => {
  const { nombre, estado } = req.body;

  const updateRol = new Rol({
    nombre,
    estado,
  });

  await Rol.findByIdAndUpdate(req.params.id, updateRol);

  res.json({
    msg: "Rol actualizado correctamente",
  });
};

RolCtrl.deleteRol = async (req, res) => {
  await Rol.findByIdAndDelete(req.params.id);
  res.json({
    msg: "Rol eliminado correctamente",
  });
};

module.exports = RolCtrl;
