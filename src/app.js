import express from "express";
import "dotenv/config";
import ConnectDatabase from "./database/connect.js";
import SignUpRouter from "./routes/signup.route.js";
import SignInRouter from "./routes/signin.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/register", SignUpRouter)
app.use("/", SignInRouter)

ConnectDatabase()
app.listen(process.env.PORT, () => console.log(`
    Servidor iniciado na porta ${process.env.PORT}
`));
