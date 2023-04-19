import express from "express";
import "dotenv/config";
import ConnectDatabase from "./database/connect.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

ConnectDatabase()
app.listen(process.env.PORT, () => console.log(`
    Servidor iniciado na porta ${process.env.PORT}
`));