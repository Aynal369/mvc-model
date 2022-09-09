const express = require("express");
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
// routes
const productRoute = require("./routes/product.route");
app.use("/app/v1/product", productRoute);

module.exports = app;
