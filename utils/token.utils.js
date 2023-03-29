const jwt = require("jsonwebtoken");
const rbac = require("../helpers/rbac");
exports.generateToken = async (payload) =>
  await jwt.sign(payload, process.env.TOKEN_SECRET);

exports.verifyToken = async (req, res, next) => {
  let authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token) {
    jwt.verify(
      token,
      process.env.TOKEN_SECRET,
      async function (err, payloadDecoded) {
        if (err) return res.status(403).json({ msg: "Invalid Token" });
        next();
      }
    );
  } else res.status(401).json({ msg: "Unauthorized! token not found" });
};
