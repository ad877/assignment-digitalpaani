import { objectType } from 'nexus';

export const book = objectType({
  name: 'Book',
  definition(t) {
    t.string('_id');
    t.string('title');
    t.string('author');
    t.string('isbn');
    t.string('publicationDate');
    t.int('numberOfPages');    
  },
});
