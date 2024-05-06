const mongoose =require('mongoose')
const userschema=new mongoose.Schema({
    userId:{
        type:Number,
        required:true,
        unique:true
    },
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    }, 
     body:{
        type:String,
        required:true
    }
})

const User=mongoose.model("User",userschema);
module.exports=User;