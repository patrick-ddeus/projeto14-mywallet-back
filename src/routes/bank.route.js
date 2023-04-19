import { Router } from "express";
import BankController from "../controllers/bank.controller";

const BankRouter = Router();

BankRouter.post('/transaction/deposit', BankController.deposit)

export default BankRouter