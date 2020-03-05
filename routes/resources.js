const express = require("express");
const router = express.Router();
const resourceModel = require("../models/resource-model");

router.get("/", async (req,res,next) => {
   try {
      const resouces = await resourceModel.findResources();
      const mappedResouces = resouces.map( (resouce) => {
            if(resouce.completed === 1) resouce.completed = true;
            if(resouce.completed === 0) resouce.completed = false;
            return resouce;
      })
      res.status(200).json(mappedResouces);
   }catch(error) {
     next(error);
   }
});

router.post("/", async (req,res,next) => {
  try {
    const newResource = req.body;
    const addedResource = await resourceModel.addResources(newResource);
    res.status(201).json(addedResource);

  }catch(error) {
    next(error);
  }
});

module.exports = router;

