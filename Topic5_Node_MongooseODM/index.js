const mongoose = require("mongoose");
const Department = require("./models/department.model");


mongoose.connect("mongodb://127.0.0.1:27017/SE1760_Mongoose")
    .then(db => {
        // Chen 1 department moi vao DB
        const newDepart = new Department({
            name: "IT",
            location: {
                floor: 1,
                room:"101"
            }
        });
        
        // Thuc thi save vao DB
        newDepart.save().then(newDoc => console.log(newDoc));
    })
    .catch(console.error);