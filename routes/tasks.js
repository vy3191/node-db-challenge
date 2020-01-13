const express = require("express");
const router = express.Router();
const taskModel = require("../models/task-model");

router.get("/", async (req,res,next) => {
   try {
      res.status(200).json(await taskModel.findTasks())
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

