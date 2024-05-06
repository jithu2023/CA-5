const express = require("express");
const app =express();
const cors = require("cors");
const ConnectDB=require("./config/database");
const userRoute = require('./routes/userRoute');
const port=3000;
app.use(express.json());
app.use(cors());
ConnectDB()



app.use("/posts",userRoute);

const Port =process.env.PORT || 4000
app.listen(port,()=>{
console.log(`server started on Port ${Port}`);
});


