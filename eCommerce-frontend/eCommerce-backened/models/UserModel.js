const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// Creating a user model in order to post what we want into our database
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Creates a salt and then hashed password based on the password passed in
userSchema.pre("save", async function (next) {
  const salt = bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Creates a userSchema method that checks if passwords are matching using bcrypt to compare the passwords
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Exporting UserTemplate as a model for our database.
module.exports = mongoose.model("user", userSchema);
