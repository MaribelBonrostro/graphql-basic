import { User } from "src/entity/User";

export const resolvers = {
  Query: {
    hello: async () => {
      return "cool";
    },
    users: async () => {
      return User.find();
    }
  }
};
