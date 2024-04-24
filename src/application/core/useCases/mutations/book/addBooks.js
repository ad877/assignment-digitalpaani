import { extendType, inputObjectType, list } from 'nexus';

export const addBooksInput = inputObjectType({
  name: 'addBooksInput',
  definition(t) {
    t.nonNull.string('title');
    t.nonNull.string('author');
    t.nonNull.string('isbn');
    t.nonNull.field('publicationDate',{
      type: 'PastDateTime',
    });
    t.nonNull.int('numberOfPages');
  },
});

export const addBooks = extendType({
  type: 'Mutation',
  definition(t) {
    t.list.field('addBooks', {
      type: 'Book',
      args: {
        input: list(addBooksInput),
      },
      resolve: async (_, args, ctx) => {
        try {
          return await ctx.mongoose.Book.insertMany(args.input);
        } catch (error) {
          console.log(error);
        }
      },
    });
  },
});
