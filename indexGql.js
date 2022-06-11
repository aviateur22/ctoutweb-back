require('dotenv').config();
const { ApolloServer } = require('apollo-server');
//const db = require('./app/database/pg');
const models = require('./app/models');

const typeDefs = require('./graphQL/schema');
const resolvers = require('./graphQL/resolvers');

const PORT = process.env.PORTGQL ?? 4000;

// const knewConnfig ={
//     client: 'pg'
//     //connection: db
// };

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models }
});

server.listen(PORT).then((url)=>{
    console.log(`🚀  Server ready at ${url}`);
});