const mongoose = require("mongoose"); 

const appsSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        trim:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    external_id:{
     type:String,
    },
    rating:{
        type:Number,
    },
    install_count:{
        type:Number,
    },
    description:{
        type:String,

    },
    url:{
        type:String,
    },
    publisher:{
        type:String,
    },
    icon:{
        type:String
    },
    min_age:{
        type:Number
    },


});

module.exports=mongoose.model("Details",appsSchema);