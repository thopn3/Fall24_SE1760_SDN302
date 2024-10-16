const express = require("express");
const morgan =require("morgan");
const httpErrors = require("http-errors");
const bodyParser = require("body-parser");
const Db = require("./models");
const CategoryRouter = require("./routes/category.route");
const ProductRouter = require("./routes/product.route");
require("dotenv").config();
const cors = require("cors");

// Khoi tao ung dung Express web server
const app = express();

// Them cac middlewares kiem soat cac requests, responses
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// Dinh tuyen tai cap do root (root router)
app.get("/", async (req, res, next) => {
    res.status(200).json({message: "Welcome to RESTFul API - NodeJS"});
});

// Recieve requests
app.use("/category", CategoryRouter);
app.use("/product", ProductRouter);

// Them middleware kiem soat requests loi cho web server
app.use(async(req, res, next) => {
    next(httpErrors.BadRequest());
});

app.use(async(err, req, res, next) => {
    res.status = err.status || 500;
    res.send({message: {status: err.status, message: err.message}});
});

const port = process.env.PORT_NUMBER || 8080;
const hostname = process.env.HOST_NAME;

app.listen(port, hostname, () => {
    console.log(`Server running at: http://${hostname}:${port}`);
    Db.connectDB();
});