const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET;
const generateToken = (id) => {
  return jwt.sign({ id }, SECRET, { expiresIn: "1d" });
};

module.exports = { generateToken };
