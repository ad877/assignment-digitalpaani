import { nonNull, objectType, stringArg } from 'nexus';
import bcrypt from 'bcrypt';
import { generateJWTToken } from '../../../../utils/index.js';

export const aAuthPayload = objectType({
  name: 'authPayload',
  definition(t) {
    t.string('token');
  },
});

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('login', {
      type: 'authPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_root, args, ctx) => {
        const user = await ctx.mongoose.User.findOne({
          email: args.email,
        });

        if (!user) {
          throw new Error('Invalid username or password');
        }

        const isValidPassword = await bcrypt.compare(
          args.password,
          user.password,
        );

        if (!isValidPassword) {
          throw new Error('Invalid username or password');
        }

        const token = generateJWTToken({ userId: user._id }, '1h');
        return { token: token };
      },
    });
  },
});
