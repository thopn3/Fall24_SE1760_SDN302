// Hoat dong tao ra cac doi tuong anh xa tu CSDL thong qua cac models
const mongoose = require("mongoose");
const Category = require("./category.model");
const Product = require("./product.model");
const Comment = require("./comment.model");

const Db = {}; // Doi tuong dai dien DB co cac thuoc tinh (Entity Object) va phuong thuc ket noi

Db.Category = Category;
Db.Product = Product;
Db.Comment = Comment;

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