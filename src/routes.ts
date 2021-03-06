import { GetPostByUserController } from "@modules/posts/controllers/GetPostsByUserController";
import { CreateUserController } from "@modules/users/controllers/createUserController";
import { Router } from "express";

const routes = Router();

const createUserController = new CreateUserController();
const getPostsByUserController = new GetPostByUserController();

routes.post("/users/create", createUserController.handle);
//routes.get("/users", )
routes.get("/posts/user/:id", getPostsByUserController.handle);

export { routes };
