const express = require("express");
const {
  createUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
} = require("../controller/UserController");
const { jwtAuth, isAdmin } = require("../middlewares/jwtauth");
// Note if you need to take an id make sure that those are under routes that do not require the id.
const router = express.Router();
// Creates a new user
router.post("/signup", createUser);

// Updates a user's password
router.put("/password", jwtAuth, updatePassword);

router.post("/forgot-password-token", forgotPasswordToken);

router.put("/reset-password/:token", resetPassword);

// Logs a user in
router.post("/login", loginUser);

// Returns all users
router.get("/all-users", getUsers);

// handles refresh token
router.get("/refresh", handleRefreshToken);

// Logs a user out
router.get("/logout", logout);

// This allows for the id to be passed in the route
// Ex. localhost:4000/api/user/{id} will give you a user
router.get("/:id", jwtAuth, getUser);

// This deletes a user by id similar to getting a user
router.delete("/:id", deleteUser);

// This updates a user by checking if jwt token is present.
router.put("/edit-user", jwtAuth, updateUser);

// Blocks users if admin
router.put("/block-user/:id", jwtAuth, isAdmin, blockUser);

router.put("/unblock-user/:id", jwtAuth, isAdmin, unblockUser);

// Export router so that you have access to each route.
module.exports = router;
