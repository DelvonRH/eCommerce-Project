const mongoose = require("mongoose");
const URI = process.env.DATABASE_ACCESS;
const dbConnection = () => {
  try {
    mongoose.connect(URI);
    console.log("Connected to database!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
