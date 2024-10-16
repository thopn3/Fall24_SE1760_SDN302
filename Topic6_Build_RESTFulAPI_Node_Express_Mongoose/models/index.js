// Hoat dong tao ra cac doi tuong anh xa tu CSDL thong qua cac models
const mongoose = require("mongoose");
const Categories = require("./category.model");
const Products = require("./product.model");
const Comments = require("./comment.model");

const Db = {}; // Doi tuong dai dien DB co cac thuoc tinh (Entity Object) va phuong thuc ket noi

Db.Categories = Categories;
Db.Products = Products;
Db.Comments = Comments;

// Ket noi CSDL
Db.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
            .then(() => console.log("Connect to MongoDB successfully"));
    } catch (error) {
        next(error);
        process.exit();
    }
}

module.exports = Db;