const { parse } = require('graphql/language');
const { validate } = require('graphql/validation');
const { schema } = require('../schema');
const { expect } = require('chai');

const isValid = (query) => {
    const queryAST = parse(query);
    const errors = validate(schema,queryAST);
    return !errors.length;
}

describe("Test validate correct query", () => {
    it("jobs query test", () => {
        const query = 'query { jobs { id } }';
        expect(isValid(query)).to.be.true;
    });

    it("bids query test", () => {
        const query1 = 'query { bids { id } }';
        const query2 = 'query { bids (job_id: 1) { id } }';
        expect(isValid(query1)).to.be.true;
        expect(isValid(query2)).to.be.true;
    });
});

describe("Test validate incorrect query", () => {
    it("jobs query test", () => {
        const query = 'query { jobs }';
        expect(isValid(query)).to.be.false;
    });

    it("bids query test", () => {
        const query1 = 'query { bids }';
        const query2 = 'query { bids (id: 1) }';
        expect(isValid(query1)).to.be.false;
        expect(isValid(query2)).to.be.false;
    });
});
