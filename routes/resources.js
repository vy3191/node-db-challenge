const express = require("express");
const router = express.Router();
const resourceModel = require("../models/resource-model");

router.get("/", async (req,res,next) => {
   try {
      res.status(200).json(await resourceModel.findResources())
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

