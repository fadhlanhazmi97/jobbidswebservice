Job Bids Webservice API
===============
Job Bids Webservice API is a graphQL based API that can solve problem that has existed in logistics industry for a long time. This problem can be solved by connecting the shippers and transporters in an online platform.

This webservice API can show list of jobs, list of bids, and list of bids associated to a job. The list shown can be sorted by any value of a jobs or bids key.

Pre-requisites
---------------
- Have Node and NPM installed

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

Testing the modules
---------------
To run all tests, type:
```sh
$ npm run test
```

To run the endpoint test, type:
```sh
$ mocha src/tests/endpoint.test.js
```

To run the schema test, type:
```sh
$ mocha src/tests/schema.test.js
```

To run the sorter test, type:
```sh
$ mocha src/tests/sorter.test.js
```