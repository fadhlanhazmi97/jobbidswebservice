const jobData = [
    {
      "id": 1,
      "origin": "Solo",
      "destination": "Semarang",
      "budget": 5400000,
      "shipment_date": "2019-04-18 05:48:18",
      "distance": 100
    },
    {
      "id": 2,
      "origin": "Surabaya",
      "destination": "Jember",
      "budget": 1300000,
      "shipment_date": "2019-04-10 05:48:18",
      "distance": 200
    },
    {
      "id": 3,
      "origin": "Jakarta",
      "destination": "Yogyakarta",
      "budget": 2500000,
      "shipment_date": "2019-04-10 05:48:18",
      "distance": 300
    }
];

const bidData = [
    {
      "id": 1,
      "job_id": 2,
      "transporter_name": "david deng",
      "transporter_rating": 4,
      "price": 1500000,
      "vehicle_name": "Fuso"
    },
    {
      "id": 2,
      "job_id": 1,
      "transporter_name": "david wildan",
      "transporter_rating": 4.5,
      "price": 4500000,
      "vehicle_name": "Tronton"
    }
];

module.exports = {
    bidData,
    jobData,
};