const { Router } = require("express");

const router = Router();

const { AuthCtrl } = require("../controllers/controllers");

router.post("/personal", AuthCtrl.signinPersonal);
router.post("/alumno", AuthCtrl.signinAlumno);
router.post("/docente", AuthCtrl.signinDocente);

module.exports = router;
