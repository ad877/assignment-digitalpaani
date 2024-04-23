import { extendType, stringArg } from 'nexus';

export const deleteBook = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('deleteBook', {
      type: 'Book',
      args: {
        title: stringArg(),
        isbn: stringArg(),
      },
      resolve: async (_, args, ctx) => {
        try {
          return await ctx.mongoose.Book.findOneAndDelete({
            $or: [{ title: args.title }, { isbn: args.isbn }],
          });
        } catch (error) {
          console.log(error);
        }
      },
    });
  },
});
