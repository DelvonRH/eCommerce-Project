const mongoose = require("mongoose");
const validateMongoDBId = (id) => {
    // Checks if the id is a valid MongoDB ID 
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if(!isValid) throw new Error("This id is not valid or not found!")
};

module.exports = validateMongoDBId;
