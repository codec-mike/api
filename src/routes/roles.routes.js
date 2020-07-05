const { Router } = require("express");

const router = Router();

const verifyToken = require("../middlewares/AuthToken.middlewares");

const { RolCtrl } = require("../controllers/controllers");

router.get("/", verifyToken, RolCtrl.getRoles);
router.get("/:id", verifyToken, RolCtrl.getRol);
router.post("/create", verifyToken, RolCtrl.createRol);
router.put("/update/:id", verifyToken, RolCtrl.updateRol);
router.delete("/delete/:id", verifyToken, RolCtrl.deleteRol);

module.exports = router;
