import pkg from 'nexus';
const { makeSchema, declarativeWrappingPlugin } = pkg;
import path from 'path';
import * as ALL from '../core/index.js';

const schema = makeSchema({
  types: [ALL],
  plugins: [declarativeWrappingPlugin()],
  shouldGenerateArtifacts: true,
  outputs: {
    schema: path.resolve('./') + '/src/generated/schema.graphql',
    typegen: path.resolve('./') + '/src/generated/nexus.ts',
  },
});

export default schema;
