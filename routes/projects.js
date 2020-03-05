const express = require("express");
const router = express.Router({mergeParams:true});
const projectModel = require("../models/projects-model");

router.get("/", async (req,res,next) => {
   try {
      const projects = await projectModel.findProjects();
      const mappedProjects = projects.map( (project) => {
         if(project.completed === 1) project.completed = true;
         if(project.completed === 0) project.completed = false;
         return project;
      })
      res.status(200).json(mappedProjects);
   }catch(error) {
     next(error);
   }
});

router.get("/:id/tasks-resources", async (req,res,next) => {
     try {
         const {id} = req.params;
         console.log(id)
         const projects = await projectModel.findAll(id);
         res.status(200).json(projects);
     } catch(error) {
        next(error)
     }
});

router.post("/", async (req,res,next) => {
  try {
    const newProject = req.body;
    const addedProject = await projectModel.addProjects(newProject);
    res.status(201).json(addedProject);

  }catch(error) {
    next(error);
  }
});

module.exports = router;

