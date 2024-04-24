import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import addDefaultGraphqlAPI from './application/server/index.js';
import addAllowedGraphqlAPI from './application/server/allowed/index.js';

dotenv.config();

const app = express();

if (process.env.NODE_ENV == 'production') {
  app.use(helmet.crossOriginResourcePolicy());
  app.use(helmet.contentSecurityPolicy());
  app.use(helmet.referrerPolicy());
  app.use(helmet.hsts());
}

addDefaultGraphqlAPI(app);
addAllowedGraphqlAPI(app);

const port = process.env.PORT_BOOK_MANAGEMENT || 3000;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    addDefaultGraphqlAPI(app);
    app.listen(port, () => {
      console.log('connected to database');
      console.log('Book-Management started up on port : ', port);
    });
  })
  .catch((error) => {
    console.error(
      'Error connecting to MongoDB, server startup failed due to : ',
      error,
    );
  });
