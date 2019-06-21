const supertest = require('supertest');

const server = require('./server.js')


describe('server', () => {
    describe('GET /', () => {
        it('responds with 200', () => {
            return supertest(server)
            .get('/')
            .expect(200)
        })
        it('responds with 200', () => {
            return supertest(server)
            .get('/games')
            .expect(200)
        })
        it('responds with 200', () => {
            await supertest(server)
            .get('/games')
            .expect('Content-Type', /json/i)
        })
        it('responds with 201', () => {
            await supertest(server)
            .post('/games')
            .expect(201)
        })
    })
})