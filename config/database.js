const mongoose=require('mongoose');
const uri ="https://jsonplaceholder.typicode.com/posts";

const ConnectDB= async ()=>{
  try{
        await mongoose.connect(uri);
        console.log("database connected successfully");
  } 
  catch(error){
    console.error("error in connecing database",error);
  } 
}
module.exports=ConnectDB;