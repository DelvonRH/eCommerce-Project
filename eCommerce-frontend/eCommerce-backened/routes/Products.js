const express = require("express");
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/ProductController");
const { isAdmin, jwtAuth } = require("../middlewares/jwtauth.js");
const router = express.Router();

router.post("/", jwtAuth, isAdmin, createProduct);
router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", jwtAuth, isAdmin, updateProduct);
router.delete("/:id", jwtAuth, isAdmin, deleteProduct);

// Export router so that you have access to each route.
module.exports = router;
