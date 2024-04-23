import * as models from '../../../mongoose/schema.js'

async function createContext({ req }) {
  return {
    req,
    mongooose: models,
  };
}

export default createContext;
