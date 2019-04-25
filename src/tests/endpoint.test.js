const app = require('../../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

describe('Test endpoint', () => {
    it('query test on jobData', () => {
        const body = {
            "query": "query{jobs{id}}"
        };
        
        chai.request(app)
        .post('/')
        .set('content-type','application/json')
        .send(body)
        .end((err,res) => {
            if (err){
                console.log(err);
            }
            expect(res.status).to.be.equal(200);
            const result = JSON.parse(res.text);
            expect(result.data.jobs.length).to.be.greaterThan(0);
            expect(result.data.jobs[0].id).to.be.equal(1)
        })
    })

    it('query test on bidData', () => {
        const body = {
            "query": "query{bids{id}}"
        };
        
        chai.request(app)
        .post('/')
        .set('content-type','application/json')
        .send(body)
        .end((err,res) => {
            if (err){
                console.log(err);
            }
            expect(res.status).to.be.equal(200);
            const result = JSON.parse(res.text);
            expect(result.data.bids.length).to.be.greaterThan(0);
            expect(result.data.bids[0].id).to.be.equal(1)
        })
    })
})