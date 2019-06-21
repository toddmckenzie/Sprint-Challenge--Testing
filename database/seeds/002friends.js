
exports.seed = function(knex, Promise) {
  return knex('games').truncate()
    .then(function () {
      return knex('games').insert([
        {id: 1, title: "Game1", genre: "PS3"},
        {id: 2, title: "Game2", genre: "Nintendo"},
        {id: 3, title: "Game3", genre: "Arcade"}
      ]);
    });
};
