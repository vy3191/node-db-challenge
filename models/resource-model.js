const db = require("../data/db-config");

function findResources() {
   return db("resources").select();
}

async function addResources(newResource) {
   const [id] = await db("resources").insert(newResource);
   return db("resources").where({id}).first();
}

module.exports = {
   findResources,
    addResources
}