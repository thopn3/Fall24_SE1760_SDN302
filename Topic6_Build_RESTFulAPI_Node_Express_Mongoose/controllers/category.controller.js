const Db = require("../models");

// Actions: Bussiness logic work DB
async function createWithProducts(req, res, next){
    try {
        if(req.body){
            const {name, description} = req.body;
            // Create a new Category
            const createdCategory = await Db.Categories.create({name, description});

            // Create multi Products and Update category data fields
            const products = req.body.products;
            products?.map(async p => {
                // Update category field
                p.category = createdCategory._id;
                // Save into Products collection
                await Db.Products.create(p);
            });

            res.status(201).json({
                message: "Create Category and Products successfully",
                data: {
                    categoryId: createdCategory._id,
                    categoryName: createdCategory.name,
                    products: products?.map(p => ({productName: p.name}))
                }
            });
        }else{
            res.status(400).json({message: "Bad Request"});
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createWithProducts,
}