const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;
const generateToken = (id) => {
  return jwt.sign({ id }, SECRET, { expiresIn: "3d" });
};

module.exports = { generateToken };
