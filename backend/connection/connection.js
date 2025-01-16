const mongoose = require("mongoose");

const conn = async (req, res) => {
    try{
        await mongoose.connect("mongodb+srv://user:<password>@cluster0.7ct6d.mongodb.net/")
        .then(()=>{
            console.log("Connected to MongoDB");
        })
    }catch(error){
        res.status(404).json({
            message : "Error connecting to MongoDB",
        });
    }
    
};
conn();
