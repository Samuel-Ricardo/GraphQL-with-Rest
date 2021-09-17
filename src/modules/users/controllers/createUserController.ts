import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController {
  async handle(request: Request, response: Response) {

    const { name, userName } = request.body;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      name,
      userName,
    });

    return response.json(user);
  }
}

export { CreateUserController };
