const mongoose = require("mongoose");

// Khai bao cau truc du lieu (schema) cho "department" document
const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        floor: {
            type: Number,
            required: [true, "Floor is required"]
        },
        room: String
    }
});

// Khai bao model
const Department = mongoose.model("department", departmentSchema);
// Export model
module.exports = Department;
