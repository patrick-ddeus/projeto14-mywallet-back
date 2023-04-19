import { Router } from "express";
import SignupController from "../controllers/signup.controller.js";
import { validRegister } from "../middlewares/global.middlewares.js";

const SignUpRouter = Router()

SignUpRouter.post('/', validRegister, SignupController.createUser)

export default SignUpRouter