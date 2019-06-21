const supertest = require('supertest');

const server = require('./server.js')


describe('server', () => {
    describe('Get /', () => {
        it('responds with api up', () => {
            return supertest(server)
            .get('/')
            .expect(200)
        })
    })
    describe('GET /games', () => {
        it('responds with 200', async () => {
            return supertest(server)
            .get('/games')
            .expect(200)
        })
        it('responds with 200', async () => {
            await supertest(server)
            .get('/games')
            .expect('Content-Type', /json/i)
        })
        
    })
})

