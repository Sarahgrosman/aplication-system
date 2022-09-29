const express = require("express");
const mongoose = require("mongoose");

const appsSchema = require("../models/Details");
const router = new express.Router();

router.post("/save",async (req,res)=>{
  await appsSchema.save(req.body);
  res.send(req.body,"saved");
});

router.post("/find",async(req,res)=>{
    const {min_age,options,rating} = req.body
    const detail =  await appsSchema.find({category:options,min_age:{$gt:0,$lte:min_age},rating:{$gt:parseInt(rating)}});
    console.log(detail);
    const reqData = detail.sort(() => (Math.random() > .5) ? 1 : -1).splice(0,3)
    
    res.send(reqData);
    
});



module.exports=router