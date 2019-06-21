const db = require('./gameModel.js');

const { add, findAll } = require('./gameModel.js');

describe('game model', () => {
    describe('add()', () => {
        it('should add game', async () => {
            await add({ title: 'Pacman', genre: 'Arcade'})

            const games = await findAll('games')

            expect(games).toHaveLength(24); //test works if you know  the length of games......
        })
        it('should add the game title and genre', async () => {
            let game = {title: 'Superman', genre: 'Arcade'};
            let added = await add(game); //games are being added to database
            expect(added.title).toBe(game.title);
            expect(added.genre).toBe(game.genre)
        })

    })

})


