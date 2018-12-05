const express= require("express");

let wwwRouter=express.Router();

module.exports=wwwRouter;


wwwRouter.get('/',(req,res)=>{
    res.send("普通用户");
    res.end();
})