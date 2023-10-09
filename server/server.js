//building a graphQL server with Apollo
//Apollo Server is a software library that helps you create and run a GraphQL server.
// we setup an apollo server to run our GrapgQL API

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//typedefinitions
const typeDefs = `#graphql

type Query {
    greeting: String
}
`;

const resolvers = {
  Query: {
    greeting: () => "Hello world",
  },
};

const server = new ApolloServer({ typeDefs: typeDefs, resolvers });
const info = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`server running at ${info.url}`);

//IMPORTAND
// if we visit the link witch runs the server it will open a page in the browser and display the
// Apollo Sandbox. This is a tool that we use to make GraphQL Queries.
//  The Sandbox is enabled by default when we run Apollo Server in Development.
//  Its a web based client that we can use to call any GraphQl Api.Api
