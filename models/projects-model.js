const db = require("../data/db-config");

function findProjects() {
   return db("projects").select();
}

async function addProjects(newProject) {
   const [id] = await db("projects").insert(newProject);
   return db("projects").where({id}).first();
}

async function findAll(id) {
   return  db("projects as p")
           .join("tasks as t", "p.id", "t.project_id")
           .where({"p.id":id})
           .first()
           .select()
}

module.exports = {
   findProjects,
    addProjects,
    findAll
}