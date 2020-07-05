const { Router } = require("express");

const router = Router();

const verifyToken = require("../middlewares/AuthToken.middlewares");

const { DocenteCtrl } = require("../controllers/controllers");

router.get("/", DocenteCtrl.getDocentes);
router.get("/:id", verifyToken, DocenteCtrl.getDocente);
router.post("/create", DocenteCtrl.createDocente);
router.put("/update/:id", verifyToken, DocenteCtrl.updateDocente);
router.delete("/delete/:id", verifyToken, DocenteCtrl.deleteDocente);

module.exports = router;
