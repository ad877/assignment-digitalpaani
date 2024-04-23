import { objectType } from 'nexus';

const book = objectType({
  name: 'Book',
  definition(t) {
    t.string('_id');
    t.string('title');
    t.string('author');
    t.string('isbn');
    t.date('publicationDate');
    t.int('numberOfPages');    
  },
});
