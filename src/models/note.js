const mongoose = require ("mongoose")

const noteschema = mongoose.Schema({
    title:{
        type : String,
        required: true
    },
    description :{
        type:String,
        required: true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required : true
    }
}, {timestamps: true});

module.exports=mongoose.model("Note",noteschema)