exports.seed = async (knex) => {
   await knex("projects_resouces").truncate();
   await knex("resources").truncate();
   await knex("tasks").truncate();
   await knex("projects").truncate();
}
