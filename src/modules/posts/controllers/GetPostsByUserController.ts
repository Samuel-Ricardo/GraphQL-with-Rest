import { container } from "tsyringe";
import { GetPostByUserService } from "../services/GetPostByUserService";


class GetPostByUserController {
  async handle(request Request, response: Response) {

    const { id } = request.params;

    const getPostByUserController = container.resolve(GetPostByUserService);
    const post = await getPostByUserService.execute(id);
    return response.json(posts);
  }
}

export { GetPostByUserController };
