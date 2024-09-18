const express = require("express");
const bodyParser = require("body-parser");

// Khai bao doi tuong Router
const productRouter = express.Router(); // productRouter: mini Express
// Them middleware cho router => Kiem soat body (req, res) theo dinh dang json
productRouter.use(bodyParser.json());

// Cach 1:
productRouter.route("/")
    .all(async (req, res, next) => {
        res.statusCode = 200;
        next();
    })
    .get(async (req, res, next) => {
        try {
            res.status(200).send({message: "Get success"});
        } catch (error) {
            next(error);
        }
    })
    .post(async (req, res, next) => {
        try {
            res.status(201).send({
                result: {id: req.body.id, name: req.body.name, price: req.body.price},
                message: "Create success"
            });
        } catch (error) {
            next(error);
        }
    })
    .put(async (req, res, next) => {
        try {
            res.status(200).send({
                result: {id: req.body.id, name: req.body.name, price: req.body.price},
                message: "Update success"
            });
        } catch (error) {
            next(error);
        }
    });

module.exports = productRouter;
