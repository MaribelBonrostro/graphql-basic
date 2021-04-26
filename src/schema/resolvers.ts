import { User } from "src/entity/User";
import { hash } from "bcryptjs";

export const resolvers = {
  Query: {
    hello: async () => {
      return "cool";
    },
    users: async () => {
      return User.find();
    }
  },
  Mutation: {
    register: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      const hashedPassword = await hash(password, 12);
      try {
        await User.insert({
          email,
          password: hashedPassword
        });
      } catch (err) {
        console.log(err);
        return false;
      }

      return true;
    }
  }
};
