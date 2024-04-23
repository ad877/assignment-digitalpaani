import { extendType } from 'nexus';

export const getBooks = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('getBooks', {
      type: 'Book',
      args: {
        title: stringArg(),
        author: stringArg(),
        isbn: stringArg(),
        publicationDate: stringArg(),
      },
      resolve: async (_, args, ctx) => {
        try {
          return await ctx.mongoose.Book.find({
            $or: [
              { title: args.title },
              { author: args.author },
              { isbn: args.isbn },
              { publicationDate: args.publicationDate },
            ].filter(Boolean),
          });
        } catch (error) {
          console.log(error);
        }
      },
    });
  },
});
