const express = require("express");
const mongoose = require("mongoose");

const appsSchema = require("../models/Details");
const router = new express.Router();

router.post("/save",async (req,res)=>{
  await appsSchema.save(req.body);
  res.send(req.body,"saved");
});

router.post("/find",async(req,res)=>{
  
    console.log(req.body);
    const {min_age,options,rating} = req.body
    console.log(min_age,options,rating)
    const detail =  await appsSchema.find();
    const requestedData1 = detail.filter((el)=> el.rating>=rating&&el.min_age<=min_age&&el.category==options[0])
    const requestedData2 = detail.filter((el)=> el.rating>=rating&&el.min_age<=min_age&&el.category==options[1])
    const requestedData3 = detail.filter((el)=> el.rating>=rating&&el.min_age<=min_age&&el.category==options[2])
    const requestedData = requestedData1.concat(requestedData2,requestedData3).sort(() => (Math.random() > .5) ? 1 : -1).splice(0,3)
    
    console.log(requestedData);
    
    res.send(requestedData);
    
});



module.exports=router