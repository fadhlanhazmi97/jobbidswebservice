const { expect } = require('chai');
const { jobData,bidData } = require('../data');
const { sortData } = require('../utils/sorter');
const { compareData } = require('../utils/comparator');

describe("Test sorter with jobData array", () => {
    const testData = () => jobData.slice();

    it("sort array by id ascending", () => {
        const expectedSort = testData().sort((a,b) => a.id > b.id);
        const sortedBySorter = sortData(testData(),compareData("id","ASC"));
        expect(sortedBySorter).to.be.deep.equal(expectedSort);
    });

    it("sort array by id descending", () => {
        const expectedSort = testData().sort((a,b) => a.id < b.id);
        const sortedBySorter = sortData(testData(),compareData("id","DESC"));
        expect(sortedBySorter).to.be.deep.equal(expectedSort);
    });

    it("sort array by origin ascending", () => {
        const expectedSort = testData().sort((a,b) => a.origin > b.origin);
        const sortedBySorter = sortData(testData(),compareData("origin","ASC"));
        expect(sortedBySorter).to.be.deep.equal(expectedSort);
    });
    
    it("sort array by origin descending", () => {
        const expectedSort = testData().sort((a,b) => a.origin < b.origin);
        const sortedBySorter = sortData(testData(),compareData("origin","DESC"));
        expect(sortedBySorter).to.be.deep.equal(expectedSort);
    });

    it("sort array by destination ascending", () => {
        const expectedSort = testData().sort((a,b) => a.destination > b.destination);
        const sortedBySorter = sortData(testData(),compareData("destination","ASC"));
        expect(sortedBySorter).to.be.deep.equal(expectedSort);
    });
    
    it("sort array by destination descending", () => {
        const expectedSort = testData().sort((a,b) => a.destination < b.destination);
        const sortedBySorter = sortData(testData(),compareData("destination","DESC"));
        expect(sortedBySorter).to.be.deep.equal(expectedSort);
    });

    it("sort array by budget ascending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.budget > b.budget);
        const sortedByIdAsc = sortData(testData(),compareData("budget","ASC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });
    
    it("sort array by budget descending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.budget < b.budget);
        const sortedByIdAsc = sortData(testData(),compareData("budget","DESC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });

    it("sort array by shipment date ascending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.shipment_date > b.shipment_date);
        const sortedByIdAsc = sortData(testData(),compareData("shipment_date","ASC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });
    
    it("sort array by shipment date descending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.shipment_date < b.shipment_date);
        const sortedByIdAsc = sortData(testData(),compareData("shipment_date","DESC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });

    it("sort array by distance ascending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.distance > b.distance);
        const sortedByIdAsc = sortData(testData(),compareData("distance","ASC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });
    
    it("sort array by distance descending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.distance < b.distance);
        const sortedByIdAsc = sortData(testData(),compareData("distance","DESC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });
});

describe("Test sorter with bidData array", () => {
    const testData = () => bidData.slice();

    it("sort array by id ascending", () => {
        const expectedSort = testData().sort((a,b) => a.id > b.id);
        const sortedBySorter = sortData(testData(),compareData("id","ASC"));
        expect(sortedBySorter).to.be.deep.equal(expectedSort);
    });

    it("sort array by id descending", () => {
        const expectedSort = testData().sort((a,b) => a.id < b.id);
        const sortedBySorter = sortData(testData(),compareData("id","DESC"));
        expect(sortedBySorter).to.be.deep.equal(expectedSort);
    });

    it("sort array by job id ascending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.job_id > b.job_id);
        const sortedByIdAsc = sortData(testData(),compareData("job_id","ASC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });
    
    it("sort array by job id descending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.job_id < b.job_id);
        const sortedByIdAsc = sortData(testData(),compareData("job_id","DESC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });

    it("sort array by transporter name ascending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.transporter_name > b.transporter_name);
        const sortedByIdAsc = sortData(testData(),compareData("transporter_name","ASC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });
    
    it("sort array by transporter name descending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.transporter_name < b.transporter_name);
        const sortedByIdAsc = sortData(testData(),compareData("transporter_name","DESC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });

    it("sort array by transporter rating ascending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.transporter_rating > b.transporter_rating);
        const sortedByIdAsc = sortData(testData(),compareData("transporter_rating","ASC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });
    
    it("sort array by transporter rating descending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.transporter_rating < b.transporter_rating);
        const sortedByIdAsc = sortData(testData(),compareData("transporter_rating","DESC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });

    it("sort array by price ascending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.price > b.price);
        const sortedByIdAsc = sortData(testData(),compareData("price","ASC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });
    
    it("sort array by price descending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.price < b.price);
        const sortedByIdAsc = sortData(testData(),compareData("price","DESC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });

    it("sort array by vehicle name ascending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.vehicle_name > b.vehicle_name);
        const sortedByIdAsc = sortData(testData(),compareData("vehicle_name","ASC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });
    
    it("sort array by vehicle name descending", () => {
        const expectedSortByIdAsc = testData().sort((a,b) => a.vehicle_name < b.vehicle_name);
        const sortedByIdAsc = sortData(testData(),compareData("vehicle_name","DESC"));
        expect(sortedByIdAsc).to.be.deep.equal(expectedSortByIdAsc);
    });
});