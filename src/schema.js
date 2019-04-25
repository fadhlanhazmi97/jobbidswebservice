const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    jobs(sortBy: String = "id", sortType: String = "ASC"): [Job]
    bids(job_id: Int = 0, sortBy: String = "id", sortType: String = "ASC"): [Bid]
  }

  type Job {
    id: Int
    origin: String
    destination: String
    budget: Int
    shipment_date: String
    distance: Int 
  }

  type Bid {
    id: Int
    job_id: Int
    transporter_name: String
    transporter_rating: Float
    price: Int
    vehicle_name: String
    job: Job
  }
`);

module.exports = { schema };