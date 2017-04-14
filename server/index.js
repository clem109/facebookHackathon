var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
// cors has been added because requests from different ports was causing a 405 error
// see this: https://github.com/graphql/express-graphql/issues/14
var cors = require('cors');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');