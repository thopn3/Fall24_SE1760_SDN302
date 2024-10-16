const express = require("express");
const bodyParser = require("body-parser");
const Db = require("../models");
const { CategoryController } = require("../controllers");

const CategoryRouter = express.Router();
CategoryRouter.use(bodyParser.json());

// Create a new category:
CategoryRouter.post("/create", async(req, res, next) => {
    try {
        // Get data from request object
        const {name, description} = req.body;
        const newCategory = new Db.Categories({name, description});

        // Insert one
        await newCategory.save().then(newDoc => {
            res.status(201).json({
                message: "Create a new category successfully",
                result: {
                    categoryCode: newDoc._id,
                    desc: newDoc.description
                }
            });
        });
    } catch (error) {
        next(error);
    }
});

CategoryRouter.post("/add", CategoryController.createWithProducts);

module.exports = CategoryRouter;