import { Router } from "express";
import SigninController from "../controllers/signin.controller.js";
import { validLogin } from "../middlewares/global.middlewares.js";
const SignInRouter = Router();

SignInRouter.post('/', validLogin, SigninController.login);

export default SignInRouter;