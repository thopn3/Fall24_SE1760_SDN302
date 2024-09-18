const express = require("express");
const bodyParser = require("body-parser");

// Khai bao doi tuong Router
const categoryRouter = express.Router(); // productRouter: mini Express
// Them middleware cho router => Kiem soat body (req, res) theo dinh dang json
categoryRouter.use(bodyParser.json());

// Get all
categoryRouter.get("/list", async (req, res, next) => {
    try {
        res.status(200).send({message: "Get all categories"});
    } catch (error) {
        next(error);
    }
});

// Get by Id
categoryRouter.get("/get/:id", async (req, res, next) => {
    try {
        res.status(200).send({message: "Get category by Id: " + req.params.id});
    } catch (error) {
        next(error);
    }
});

// Get by Id
categoryRouter.post("/create", async (req, res, next) => {
    try {
        res.status(201).send({
            result: {id: req.body.id, name: req.body.name},
            message: "Create success"
        });
    } catch (error) {
        next(error);
    }
});

module.exports = categoryRouter;