const Db = require("../models");

const getAll = async (req, res, next) => {
    try {
        const products = await Db.Products.find({}).populate("category").exec();
        if(products){
            res.status(200).json({
                message: "List of products",
                data: products?.map(p => ({
                    code: p._id,
                    name: p.name,
                    price: p.price,
                    categoryName: p.category?.name
                }))
            })
        }else{
            res.status(404).json({
                message: "Product not found"
            })
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll,
}