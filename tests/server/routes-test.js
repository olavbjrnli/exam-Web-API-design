const request = require('supertest');
const app = require('../../src/server/app');
const rep = require('../../src/server/repository');

//Very inspired by test at https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/tests/server/app-test.js
beforeEach(() => {rep.initWithPokemon();});

test("Test get all pokemon", async () =>{

    const response = await request(app).get('/api/pokemons');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(5);
});

//Taken from http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
describe('Test the root path', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});
