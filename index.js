import { GraphQLServer } from 'graphql-yoga';
import resolvers from './movieql/resolvers';

const server = new GraphQLServer({
    typeDefs: "movieql/schma.graphql",
    resolvers
});

server.start(() => { console.log("GraphQL Server Running!") });