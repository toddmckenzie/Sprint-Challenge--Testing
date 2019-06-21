const db = require('./gameModel.js');

const { add, findAll } = require('./gameModel.js');

describe('game model', () => {
    describe('add()', () => {
        it('should add game', async () => {
            await add({ title: 'Pacman', genre: 'Arcade'})

            const games = await db('games')

            expect(games).toHaveLength(1);
        })
        it('should add the game title and genre, () => {
            let game = { title: 'Pacman', genre: 'Arcade'};
            let added = await add(game);
            expect(added.title).toBe(game.title);
            expect(added.genre).toBe(game.genre)
        })
    })
})
