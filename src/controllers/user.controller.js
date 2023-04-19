import { v4 as uuidv4 } from "uuid";
import SessionService from "../services/session.service.js";
import BankService from "../services/bank.service.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
    const UserinDb = req.user;

    try {
        const token = uuidv4();

        SessionService.createUserSession({
            createdAt: new Date(),
            userId: UserinDb._id,
            token
        });

        res.status(201).json({
            token,
            name: UserinDb.name,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const User = await UserService.insertOneService({
            name,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword
        });

        await BankService.createAccount({ userId: User.insertedId, transactions: [], balance: 0 });

        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};


export default {
    login,
    createUser
};