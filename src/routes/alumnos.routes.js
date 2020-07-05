const { Router } = require("express");

const router = Router();

const verifyToken = require("../middlewares/AuthToken.middlewares");

const { AlumnoCtrl } = require("../controllers/controllers");

router.get("/", AlumnoCtrl.getAlumnos);
router.get("/:id", verifyToken, AlumnoCtrl.getAlumno);
router.post("/create", AlumnoCtrl.createAlumno);
router.put("/update/:id", verifyToken, AlumnoCtrl.updateAlumno);
router.delete("/delete/:id", verifyToken, AlumnoCtrl.deleteAlumno);

module.exports = router;
