import { extendType, stringArg, arg} from 'nexus';
import { scalarType } from 'nexus';
import { DateTimeResolver } from 'graphql-scalars';

export const PastDateTime = scalarType({
  ...DateTimeResolver,
  name: 'PastDateTime',
  parseValue(value) {
    const dateValue = new Date(value);
    if (dateValue > new Date()) {
      throw new Error('Date cannot be in the future');
    }
    return dateValue;
  },
  parseLiteral(ast) {
    const dateValue = new Date(ast.value);
    if (dateValue > new Date()) {
      throw new Error('Date cannot be in the future');
    }
    return dateValue;
  },
});

export const getBooks = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('getBooks', {
      type: 'Book',
      args: {
        title: stringArg(),
        author: stringArg(),
        isbn: stringArg(),
        publicationDate: arg({ type: PastDateTime }),
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
