// Importing UserTemplate from UserModel.js.
const { generateToken } = require("../config/jwtToken");
const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");

// Register / Create a user
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    // Create new User
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});

// Login a user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check if user exists
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      id: findUser?._id,
      name: findUser?.name,
      email: findUser?.email,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// Get all users
const getUsers = asyncHandler(async (req, res) => {
  try {
    const getAllUsers = await User.find();
    res.json(getAllUsers);
  } catch (error) {
    throw new Error(error);
  }
});

// Get user
const getUser = asyncHandler(async (req, res) => {
  // Grabs the id from the request
  const { id } = req.params;
  // Finds user by Id
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

// Update user
const updateUser = asyncHandler(async (req, res) => {
  // Grabs the id from the request
  const { _id } = req.user;
  // Finds user by Id
  try {
    const user = await User.findByIdAndUpdate(
      _id,
      {
        name: req?.body?.name,
        email: req?.body?.email,
      },
      {
        new: true,
      }
    );
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete user
const deleteUser = asyncHandler(async (req, res) => {
  // Grabs the id from the request
  const { id } = req.params;
  // Finds user by Id
  try {
    const user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User is blocked."
    })
  } catch (error) {
    throw new Error(error);
  }
});

const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
     res.json({
       message: "User is unblocked.",
     });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
};
