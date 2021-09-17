import Post from "@models/Post";
import { injectable } from "tsyringe";


interface IPostRequest {
  content: string;
  author: string;
}

@injectable()
class CreatePostService {
  async execute(data: IPostRequest) { return await Post.create(data) }
}

export { CreatePostService };
