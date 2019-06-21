const db = require('../database/dbConfig');

module.exports = {
    findAll,
    add
}

function findAll() {
    return db('games')
}

function add(game) {
    return db('games').insert(game)
}