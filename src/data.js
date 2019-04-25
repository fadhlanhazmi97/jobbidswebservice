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
    },
    {
      "id": 3,
      "job_id": 1,
      "transporter_name": "fadhlan hazmi",
      "transporter_rating": 4.6,
      "price": 8500000,
      "vehicle_name": "Hino"
    },
    {
      "id": 4,
      "job_id": 2,
      "transporter_name": "hazmi fadhlan",
      "transporter_rating": 3.6,
      "price": 500000,
      "vehicle_name": "Izuzu"
    }
];

module.exports = {
    bidData,
    jobData,
};