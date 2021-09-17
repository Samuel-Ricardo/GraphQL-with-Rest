import { User } from "@models/User";
import { injectable } from "tsyringe";

@injectable()
class CreateUserService {
  async execute({ name, userName }: Omit<User, "createdAt">) {

    const userAlreadyExists = await User.findOne({
      userName,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const user = await User.create({
      name,
      userName,
    });

    return user;
  }
}

export { CreateUserService };
