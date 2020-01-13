const express = require("express");
const router = express.Router();
const projectModle = require("../models/projects-model");

router.get("/", async (req,res,next) => {
   try {
      res.status(200).json(await projectModle.findProjects())
   }catch(error) {
     next(err);
   }
});

router.post("/", async (req,res,next) => {
  try {
    const newProject = req.body;
    const addedProject = await projectModle.addProjects(newProject);
    res.status(201).json(addedProject);

  }catch(error) {
    next(err);
  }
});

module.exports = router;

