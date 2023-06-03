const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const dbConnection = require("./config/dbConnect");
const PORT = process.env.PORT;
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Importing router from each route file and then using require to store them in a variable.
// Ex. userRoute = router from ./routes/User or User.js
const userRoute = require("./routes/User");

// const productRoute = require("./routes/Products");
// const cartRoute = require("./routes/Cart");

// // Replacing "/" with /api/users in the User.js route
app.use("/api/user", userRoute);

app.use(notFound);
app.use(errorHandler);
// // Replacing "/" with /products in the Product.js route
// app.use("/products", productRoute);
// // Replacing "/" with /cart in the Cart.js route
// app.use("/cart", cartRoute);

dbConnection();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
