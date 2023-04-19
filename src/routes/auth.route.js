import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import { validRegister, validLogin } from "../middlewares/global.middlewares.js"

const AuthRouter = Router();

AuthRouter.post('/register', validRegister, UserController.createUser);
AuthRouter.post('/login', validLogin, UserController.login);

export default AuthRouter;