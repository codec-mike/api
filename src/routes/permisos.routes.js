const { Router } = require("express");

const router = Router();

const verifyToken = require("../middlewares/AuthToken.middlewares");

const { PermisoCtrl } = require("../controllers/controllers");

router.get("/", verifyToken, PermisoCtrl.getPermisos);
router.get("/:id", verifyToken, PermisoCtrl.getPermiso);
router.post("/create", verifyToken, PermisoCtrl.createPermiso);
router.put("/update/:id", verifyToken, PermisoCtrl.updatePermiso);
router.delete("/delete/:id", verifyToken, PermisoCtrl.deletePermiso);

module.exports = router;
