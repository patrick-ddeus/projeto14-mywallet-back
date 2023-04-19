import UserService from "../services/user.service.js";
import bcrypt from "bcrypt";

const createUser = async (req, res) => {
    const newUserInfo = req.user;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUserInfo.password, salt);
    try {
        await UserService.insertOneService({ ...newUserInfo, password: hashedPassword, confirmPassword: hashedPassword });
        res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

};

export default {
    createUser,
};