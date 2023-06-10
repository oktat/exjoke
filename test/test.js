const supertest = require('supertest')

describe('GET /api/users', function() {

    const host = 'http://localhost:8000/api' 
    const restype= 'application/json; charset=utf-8'


    it('post /register add mari', function(done) {
      supertest(host)
        .post('/register')
        .set('Accept', 'application/json')
        .send({
            name: 'mari',
            email: 'mari@zold.lan',
            password: 'titok',
            password_confirmation: 'titok'
        })
        .expect('Content-Type', restype)
        .expect(201, done)
    })
    it('post /register  add dani', function(done) {
      supertest(host)
        .post('/register')
        .set('Accept', 'application/json')
        .send({
            name: 'dani',
            email: 'dani@zold.lan',
            password: 'titok',
            password_confirmation: 'titok'
        })
        .expect('Content-Type', restype)
        .expect(201, done)
    })

    it('get /users', function(done) {
      supertest(host)
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200, done)
    })    

  })