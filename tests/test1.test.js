const request = require('supertest') //This is the instance object of "supertest" package 
const app = require('../server')

describe("Test suite 1:", ()=>{
    test("test 1: ", async ()=>{
        const res = await request(app).get('/') // The test: sending our server to the "request" instance and running get
        expect(res.statusCode).toEqual(200) //We expect the result to be positive because we have this "get"
    })
    test("test 2: ", async ()=>{
        const res = await request(app).get('/1234') //Non-existing get
        expect(res.statusCode).toEqual(404) 
    })
})