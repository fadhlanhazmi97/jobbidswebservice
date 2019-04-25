const express = require('express');
const graphqlHTTP = require('express-graphql');

const { schema } = require('./src/schema');
const { root } = require('./src/resolver');

const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000');

module.exports = app;