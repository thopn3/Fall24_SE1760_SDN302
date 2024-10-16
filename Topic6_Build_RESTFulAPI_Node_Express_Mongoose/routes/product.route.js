const bodyParser = require("body-parser");
const express = require("express");
const { ProductController } = require("../controllers");

const ProductRouter = express.Router();
ProductRouter.use(bodyParser.json());

// GET: /product/get-all
ProductRouter.get("/get-all", ProductController.getAll);

module.exports = ProductRouter;