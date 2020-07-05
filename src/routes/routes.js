const { Router } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");

const AuthRoutes = require("./auths.routes");
const AlumnoRoutes = require("./alumnos.routes");
const DocenteRoutes = require("./docentes.routes");
const PersonalRoutes = require("./personales.routes");
const RolRoutes = require("./roles.routes");
const PermisoRoutes = require("./permisos.routes");

const router = Router();
const apiRoute = Router();
apiRoute
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(compression());

apiRoute.use("/auth", AuthRoutes);
apiRoute.use("/alumno", AlumnoRoutes);
apiRoute.use("/docente", DocenteRoutes);
apiRoute.use("/personal", PersonalRoutes);
apiRoute.use("/rol", RolRoutes);
apiRoute.use("/permiso", PermisoRoutes);

router.use("/api", apiRoute);

module.exports = router;
