const jwt = require("jsonwebtoken");
const config = require("../config/config");

function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({
      auth: false,
      message: "No se ha provisto un token",
    });
  }

  const decoded = jwt.verify(token, config.secret);

  req.userId = decoded.id;
  req.userRol = decoded.rol;
  next();
}

module.exports = verifyToken;
