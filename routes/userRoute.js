const express=require('express');
const router =express.Router()
require("dotenv").config()
const User = require("../models/usermodel")



router.get("/posts",async (req,res)=>{
    try{
        const data=await User.find();
        res.json(data)
        console.log(data)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
})


module.exports=router;
