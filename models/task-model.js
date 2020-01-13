const db = require("../data/db-config");

function findTasks() {
   return db("tasks").select();
}

async function addTasks(task) {
   const [id] = await db("tasks").insert(task);
   return db("tasks").where({id}).first();
}

module.exports = {
   findTasks,
    addTasks
}