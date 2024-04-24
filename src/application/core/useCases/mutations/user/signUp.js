import { extendType, objectType, stringArg, nonNull } from 'nexus';
import bcrypt from 'bcrypt';

export const userSignUpResponse = objectType({
  name: 'UserSignUpResponse',
  definition(t) {
    t.string('message');
    t.boolean('success');
  },
});

export const userSignUp = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('userSignUp', {
      type: 'UserSignUpResponse',
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_, args, ctx) => {
        try {
          const userExists = await ctx.mongoose.User.findOne({
            email: args.email,
          });

          if (userExists) {
            return {
              message: 'User already exists',
              success: false,
            };
          }

          const user = ctx.mongoose.User.create({
            name: args.name,
            email: args.email,
            password: await bcrypt.hash(args.password, 10),
          });

          if (!user) {
            return {
              message: 'Error Signing up',
              success: false,
            };
          }
          return {
            message: 'User signed up successfully',
            success: true,
          };
        } catch (error) {
          console.log(error);
        }
      },
    });
  },
});
