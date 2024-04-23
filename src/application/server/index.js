import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import pkg from 'body-parser';
const { json } = pkg;
import cors from 'cors';
import schema from './schema.js';
import context from './context.js';

export default async (app) => {
  const server = new ApolloServer({
    schema,
    introspection: process.env.NODE_ENV !== 'production',
    playground: process.env.NODE_ENV !== 'production',
    persistedQueries: false,
  });

  const path = process.env.DEFAULT_GRAPHQL_PATH || '/graphql';
  await server.start();

  app.use(
    path,
    cors(),
    json(),
    expressMiddleware(server, {
      context: context,
    }),
  );

  return app;
};
