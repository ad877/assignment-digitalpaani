import pkg from 'nexus';
const { makeSchema, declarativeWrappingPlugin } = pkg;
import path from 'path';
import {
  book,
  getBooks,
  authPayload,
  authenticate,
  userSignUpResponse,
  userSignUp,
} from '../../core/index.js';

const schema = makeSchema({
  types: [
    book,
    getBooks,
    authPayload,
    authenticate,
    userSignUpResponse,
    userSignUp,
  ],
  plugins: [declarativeWrappingPlugin()],
  shouldGenerateArtifacts: true,
  outputs: {
    schema:
      path.resolve('./') +
      '/src/application/server/allowed/generated/schema.graphql',
    typegen:
      path.resolve('./') + '/src/application/server/allowed/generated/nexus.ts',
  },
});

export default schema;
