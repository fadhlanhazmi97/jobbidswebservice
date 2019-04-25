Job Bids Webservice API
===============
Job Bids Webservice API is a graphQL based API that can solve problem that has existed in logistics industry for a long time. This problem can be solved by connecting the shippers and transporters in an online platform.

This webservice API can show list of jobs, list of bids, and list of bids associated to a job. The list shown can be sorted by any value of a jobs or bids key.

Pre-requisites
--------------
Have Node and NPM installed

Installation
--------------
Clone the repo and install its dependencies:
```sh
$ git clone https://github.com/fadhlanhazmi97/jobbidswebservice
$ cd jobbidswebservice/
$ npm install
``` 

Run the Server
---------------
Type:
```sh
$ npm start
```

The server and endpoint will be on:
```sh
http://localhost:4000/
```


Call the API
---------------
To call the API use the endpoint above and use this header:
```
'content-type' : 'application/json'
```
And the body:
```
{
    query: "queries here"
}

// example:

{
    query: "queries{ jobs{ id } }"
}
```
The query will be explained further below

Making Query
---------------
Data that can be queried is:
- Jobs
- Bids
- Bids by job_id

To query all jobs, use this query:
```
query {
    jobs {
        // fields that you want to get
    }
}

// query all fields

query {
    jobs{
        id
        origin
        destination
        budget
        shipment_date
        distance
    }
}
```
To query all bids, use this query:
```
query {
    bids {
        // fields that you want to get
    }
}

// query all fields

query {
    bids {
        id
        job_id
        transporter_name
        transporter_rating
        price
        vehicle_name
    }
}
```
To query bids with a particular job id, use job_id (Int) parameter in the query
```
query (job_id: id) {
    // fields that you want to get
}

// query example
query {
    bids (job_id: 1) {
        id
        job_id
        transporter_name
        transporter_rating
        price
        vehicle_name
    }
}
```

Queries can be sorted by fields on the data, this can be done by using these parameter:
- sortBy (string): field to sort from the data (default by id). Parameters must be exists on data's field, if not, it will be using default parameter (id)
- sortType (string): ascending or descending sort, (default ascending). Format of the parameters: "ASC" and "DESC"

Example queries:
```
// query on jobs

query {
    jobs(sortBy: "origin",sortType:"ASC"){
        id
        origin
        destination
        budget
        shipment_date
        distance
    }
}

// query on bids

query {
    jobs(sortBy: "transporter_name",sortType:"DESC"){
        id
        job_id
        transporter_name
        transporter_rating
        price
        vehicle_name
    }
}
```
Testing the modules
---------------
To run all tests, type:
```sh
$ npm run test
```

To run only the endpoint test, type:
```sh
$ mocha src/tests/endpoint.test.js
```

To run only the schema test, type:
```sh
$ mocha src/tests/schema.test.js
```

To run only the sorter test, type:
```sh
$ mocha src/tests/sorter.test.js
```