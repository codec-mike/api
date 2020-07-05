const PermisoCtrl = {};

const Permiso = require("../models/Permiso");

PermisoCtrl.getPermisos = async (req, res) => {
  const permisos = await Permiso.find();
  res.json(permisos);
};

PermisoCtrl.createPermiso = async (req, res) => {
  const { nombre, estado } = req.body;

  const newPermiso = new Permiso({
    nombre,
    estado,
  });

  await newPermiso.save();

  res.json({
    msg: "Permiso creado correctamente",
  });
};

PermisoCtrl.getPermiso = async (req, res) => {
  const permiso = await Permiso.findById(req.params.id);
  res.json(permiso);
};

PermisoCtrl.updatePermiso = async (req, res) => {
  const { nombre, estado } = req.body;

  const updatePermiso = new Permiso({
    nombre,
    estado,
  });

  await Permiso.findByIdAndUpdate(req.params.id, updatePermiso);

  res.json({
    msg: "Permiso actualizado correctamente",
  });
};

PermisoCtrl.deletePermiso = async (req, res) => {
  await Permiso.findByIdAndDelete(req.params.id);
  res.json({
    msg: "Permiso eliminado correctamente",
  });
};

module.exports = PermisoCtrl;
