import express from "express";
import cors from "cors";
import "dotenv/config";
import ConnectDatabase from "./database/connect.js";
import AuthRouter from "./routes/auth.route.js";
import TransactionsRouter from "./routes/bank.route.js";

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use("/auth", AuthRouter);
app.use("/bank", TransactionsRouter);

ConnectDatabase();
app.listen(process.env.PORT, () => console.log(`
    Servidor iniciado na porta ${process.env.PORT}
`));
