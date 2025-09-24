const request = require('supertest');
const chai = require('chai');
const app = require('./server');
const { expect } = chai;

describe('Task API', () => {
    it('should create a new task', (done) => 
    {
        request(app)
            .post('/tasks')
            .send({ title: 'Test task', description: 'Test Description' })
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.title).to.equal('Test task');
                done();
            });
    });
});