import { Router } from "express";
import BankController from "../controllers/bank.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";
import { validTransaction } from "../middlewares/global.middlewares.js";

const BankRouter = Router();

BankRouter.post('/transaction/deposit', AuthMiddleware, validTransaction, BankController.deposit);

export default BankRouter;