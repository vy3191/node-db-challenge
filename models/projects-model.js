const db = require("../data/db-config");

function findProjects() {
   return db("projects").select();
}

async function addProjects(newProject) {
   const [id] = await db("projects").insert(newProject);
   return db("projects").where({id}).first();
}

async function findAll(id) {
   const projects =  await db("projects").where({id}).first();
   const tasks = await db("tasks as t")
                         .where({"t.project_id": id})
                         .select("t.id as Task Id",
                                 "t.project_id as Project ID",
                                 "t.description as Task Description", 
                                 "t.notes as Task Notes",
                                 "t.completed as Is Task Completed" );
   const resources = await db("resources as r")
                            .join("projects_resources as p_r", "p_r.resource_id", "r.id")
                            .where({"p_r.project_id": id}) 
                            .select("r.id as Resource ID", "r.name as Resouce Name", "r.description as Description");
                            
   return { ...projects, tasks, resources};                            
}

module.exports = {
   findProjects,
    addProjects,
    findAll
}