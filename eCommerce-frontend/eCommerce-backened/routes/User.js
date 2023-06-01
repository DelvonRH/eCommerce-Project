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
} = require("../controller/UserController");
const { jwtAuth, isAdmin } = require("../middlewares/jwtauth");
// Note if you need to take an id make sure that those are under routes that do not require the id.
const router = express.Router();

router.post("/signup", createUser);

router.post("/login", loginUser);

router.get("/all-users", getUsers);

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
