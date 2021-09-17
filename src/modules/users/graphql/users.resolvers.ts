import { container } from "tsyringe"
import { CreateUserService } from "../services/CreateUserService";
import { GetUsersService } from "../services/GetUsersService"


const userResolvers = {

  Query: {
    getAllUsers() {
      const getUsersServices = container.resolve(GetUsersService);
      const users = getUsersServices.execute();
      return users;
    },
  },

  Mutation: {
    createUser(context, { input }) { return container.resolve(CreateUserService).execute(input) }
  },
};

export default userResolvers;
