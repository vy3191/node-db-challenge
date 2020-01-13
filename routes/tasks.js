const express = require("express");
const router = express.Router();
const taskModel = require("../models/task-model");

router.get("/", async (req,res,next) => {
   try {
      const tasks =await taskModel.findTasks();
      const mappedTasks = tasks.map( (task) => {
          if(task.completed === 1) {
              task.completed = true;
          } else {
              task.completed = false;
          }
          return task;
      })
      res.status(200).json(mappedTasks);
   }catch(error) {
     next(error);
   }
});

router.post("/", async (req,res,next) => {
  try {
    const newTask = req.body;
    const addedTask = await taskModel.addTasks(newTask)
    res.status(201).json(addedTask);

  }catch(error) {
    next(error);
  }
});

module.exports = router;

