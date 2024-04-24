import * as models from '../../../mongoose/schema.js'

async function createContext({ req }) {
  return {
    req,
    mongoose: models,
  };
}

export default createContext;
