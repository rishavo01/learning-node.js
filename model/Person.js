const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    work:{
        type:String,
        enum:["CEO","Manger","Staff"],
        require:true

    },
    salary:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

})