const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const SECRET = process.env.JWT_SECRET;

const jwtAuth = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error(
        "Denied: Your Authorization Token has expired, pleae login again"
      );
    }
  } else {
    throw new Error("There is no token attached to the header");
  }
});

const isAdmin = asyncHandler(async (req, res, next) => {
    const {email} = req.user
    const admin = await User.findOne({email: email})
    if(admin.role !== "admin"){
        throw new Error("You do not have the correct administrator privileges");
    }
    else{
        next();
    }
})

module.exports = { jwtAuth, isAdmin };
