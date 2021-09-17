import { container } from "tsyringe";
import { CreatePostService } from "../services/CreatePostService";
import { GetPostByUserService } from "../services/GetPostByUserService";



const postResolvers = {

  Mutation: {
    createPost(_, { input }) {
      const createPostService = container.resolve(CreatePostService);
      const post = createPostService.execute(input);
      return post;
    },
  },

  Query: {
    getPostByUser(context, { idUser }) {
      const getPostByUserService = container.resolve(GetPostByUserService);
      const posts = getPostByUserService.excute(idUser);
      return posts;
    },
  },
};

export default postResolvers
