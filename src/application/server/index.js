import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import pkg from 'body-parser';
const { json } = pkg;
import cors from 'cors';
import schema from './schema.js';
import context from './context.js';
import { verifyJWTToken } from '../utils/index.js';

export default async (app) => {
  const server = new ApolloServer({
    schema,
    introspection: process.env.NODE_ENV !== 'production',
    playground: process.env.NODE_ENV !== 'production',
    persistedQueries: false,
  });

  const path = process.env.DEFAULT_GRAPHQL_PATH || '/graphql';

  app.use(path, async (req, res, next) => {
    const verifyLogin = verifyJWTToken(req.headers['authorization']);

    if (verifyLogin.valid) {
      return next();
    }

    res.sendStatus(401);
  });
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
