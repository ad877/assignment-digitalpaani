import { extendType, intArg, stringArg, nonNull } from 'nexus';

export const updateBook = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('updateBook', {
      type: 'Book',
      args: {
        title: stringArg(),
        author: stringArg(),
        isbn: nonNull(stringArg()),
        publicationDate: stringArg(),
        numberOfPages: intArg(),
      },
      resolve: async (_, args, ctx) => {
        try {
          return await ctx.mongoose.Book.findOneAndUpdate(
            { isbn: args.isbn },
            {
              title: args.title,
              author: args.author,
              publicationDate: args.publicationDate,
              numberOfPages: args.numberOfPages,
            },
            { new: true },
          );
        } catch (error) {
          console.log(error);
        }
      },
    });
  },
});
