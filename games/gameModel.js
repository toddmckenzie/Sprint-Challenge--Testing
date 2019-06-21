const db = require('../database/dbConfig.js');

module.exports = {
    findAll,
    add
}

function findAll() {
    return db('games')
}

async function add(game) {
    const [id] = await db('games').insert(game);

    return id;
}