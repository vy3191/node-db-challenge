const db = require("../data/db-config");

function findTasks() {
   return db("tasks as t")
            .join("projects as p", "p.id", "t.project_id")
            .select("t.id as Task ID",                  
                   "p.name as Project Name",             
                   "p.description as Project Descrition",
                    "t.project_id as Project ID", 
                    "t.description as Task Description",
                    "t.notes as Task Notes",
                   "t.completed as Is Task Completed?" )
            .orderBy("t.project_id")                     
}

async function addTasks(task) {
   const [id] = await db("tasks").insert(task);
   return db("tasks").where({id}).first();
}

module.exports = {
   findTasks,
    addTasks
}