const { Router } = require("express");

const router = Router();

const verifyToken = require("../middlewares/AuthToken.middlewares");

const { PersonalCtrl } = require("../controllers/controllers");

router.get("/", verifyToken, PersonalCtrl.getPersonales);
router.get("/:id", verifyToken, PersonalCtrl.getPersonal);
router.post("/create", verifyToken, PersonalCtrl.createPersonal);
router.put("/update/:id", verifyToken, PersonalCtrl.updatePersonal);
router.delete("/delete/:id", verifyToken, PersonalCtrl.deletePersonal);

module.exports = router;
