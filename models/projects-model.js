const db = require("../data/db-config");

function findProjects() {
   return db("projects").select();
}

async function addProjects(newProject) {
   const [id] = await db("projects").insert(newProject);
   return db("projects").where({id}).first();
}

module.exports = {
   findProjects,
    addProjects
}