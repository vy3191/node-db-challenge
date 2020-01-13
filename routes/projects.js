const express = require("express");
const router = express.Router();
const projectModle = require("../models/projects-model");

router.get("/", async (req,res,next) => {
   try {
      const projects = await projectModle.findProjects();
      const mappedProjects = projects.map( (project) => {
         if(project.completed === 1) project.completed = true;
         if(project.completed === 0) project.completed = false;
         return project;
      })
      res.status(200).json(mappedProjects);
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

