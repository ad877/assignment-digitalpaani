import { objectType } from 'nexus';

const user = objectType({
  name: 'User',
  definition(t) {
    t.string('_id');
    t.string('name');
    t.string('password');
  },
});
