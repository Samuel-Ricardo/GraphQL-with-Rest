import { container } from "tsyringe";



const postResolvers = {
  Mutation: {
    createPost(_, { input }) {
      const createPostService = container.resolve(CreatePost)
    }
  }
}
