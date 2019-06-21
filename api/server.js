const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const server = express();

server.use(helmet());
server.use(cors());

const gamesRoutes = require('../games/gameRoutes')

server.get('/', async (req, res) => {
    res.status(200).json({ api: 'up'})
})

server.use('/games', gamesRoutes)

module.exports = server;