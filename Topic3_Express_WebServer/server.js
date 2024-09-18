// Khai bao thu vien express
const express = require("express");
const morgan =require("morgan");
const httpErrors = require("http-errors");
const productRouter = require("./routes/product.route");
const categoryRouter = require("./routes/category.route");

// Khai bao cau hinh cho Express web server
const hostname = "localhost";
const port = 9999;

// Khoi tao ung dung Express web server
const app = express();

// Them cac middlewares kiem soat cac requests, responses
app.use(morgan("dev"));

// Dinh tuyen tai cap do root (root router)
app.get("/", async (req, res, next) => {
    res.status(200).send("Welcome to Express web server");
});

app.get("/get/:id/:name", async(req, res, next) => {
    res.status(200).send(`Product by Id: ${req.params.id} - Product name: ${req.params.name}`);
});

// Routes
app.use("/product", productRouter);
app.use("/category", categoryRouter);

// Them middleware kiem soat requests loi cho web server
app.use(async(req, res, next) => {
    next(httpErrors.BadRequest());
});

app.use(async(err, req, res, next) => {
    res.status = err.status;
    res.send({message: {status: err.status, message: err.message}});
});


// Thiet lap hoat dong tiep nhan requests va hoi dap responses
app.listen(port, hostname, () => {
    console.log(`Server running at: http://${hostname}:${port}`); 
});