// Write your tests here
const server = require('./server.js');
const request = require('supertest');

describe('server.js', () => {
    describe('POST /api/auth/register', () => {
        test('sucessfully registers', async () => {
            const res = await request(server).post('/api/auth/register').send({username: 'john7', password: 'Whatever'});
            expect(res.status).toBe(201);
            expect(res.type).toBe('application/json');
        })
        test('sucessfully registers', async () => {
            const res = await request(server).post('/api/auth/register').send({username: 'john8', password: 'Whatever'});
            expect(res.status).toBe(201);
            expect(res.type).toBe('application/json');
        })
    })
    describe('POST /api/auth/login', () => {
        test('successfully logs in', async () => {
            const res = await request(server).post('/api/auth/login').send({username: 'john7', password: 'Whatever'});
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
        })
        test('successfully logs in', async () => {
            const res = await request(server).post('/api/auth/login').send({username: 'john8', password: 'Whatever'});
            expect(res.status).toBe(200);
            expect(res.type).toBe('application/json');
        })
    })
    
})