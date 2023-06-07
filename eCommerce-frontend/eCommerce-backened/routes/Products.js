const express = require("express");
const {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/ProductController");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts)
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct); j

// Export router so that you have access to each route.
module.exports = router;
