import { extendType, stringArg } from 'nexus';

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

            let query = [
                { title: args.title },
                { author: args.author },
                { isbn: args.isbn },
                { publicationDate: args.publicationDate },
              ].filter(item => Object.values(item)[0] != null);
              
              if (query.length === 0) {
                return await ctx.mongoose.Book.find({});
              } else {
                return await ctx.mongoose.Book.find({ $or: query });
              }
        } catch (error) {
          console.log(error);
        }
      },
    });
  },
});
