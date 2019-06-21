
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', tbl => {
        tbl.increments();
        tbl.string('title').notNullable();
        tbl.string('genre').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('games');
  };
  