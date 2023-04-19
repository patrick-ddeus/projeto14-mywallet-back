import UserService from "../services/user.service.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        await UserService.insertOneService({
            name,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword
        });

        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export default {
    createUser,
};