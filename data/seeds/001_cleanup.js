exports.seed = async (knex) => {
   await knex("projects_resources").truncate();
   await knex("resources").truncate();
   await knex("tasks").truncate();
   await knex("projects").truncate();
}
