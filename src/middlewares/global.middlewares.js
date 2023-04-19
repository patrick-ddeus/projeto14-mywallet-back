import UserService from "../services/user.service.js";
import bcrypt from "bcrypt";

export const validRegister = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    const regexValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(422).json({ message: "Campo Body inválido!" });
    }

    if (!regexValidEmail.test(email)) {
        return res.status(422).json({ message: "Formato inválido de Email!" });
    }

    if (password.length < 3) {
        return res.status(422).json({ message: "Senhas devem conter no mínimo 3 caracteres!" });
    }

    try {
        const user = await UserService.findOneService({ email });

        if (user) {
            return res.status(409).json({ message: "Email já cadastrado!" });
        }

        req.user = { name, email, password, confirmPassword };

        return next();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const validLogin = async (req, res, next) => {
    const { email, password } = req.body;
    const regexValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email || !password) {
        return res.status(422).json({ message: "Campo Body inválido!" });
    }

    if (!regexValidEmail.test(email)) {
        return res.status(422).json({ message: "Formato inválido de Email!" });
    }

    try {
        const User = await UserService.findOneService({ email: email });

        if (!User) {
            return res.status(404).json({ message: "Email não cadastrado. Verifique suas informações e tente novamente." });
        }

        const isValidPassword = await bcrypt.compare(password, User.password);

        if (!isValidPassword) {
            return res.status(401).json({ message: "Senha não cadastrada. Verifique suas informações e tente novamente." });
        }

        req.user = User;

        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const validTransaction = (req, res, next) => {
    const { valor, descricao } = req.body;

    if (!valor) {
        return res.status(422).json({ message: "Campo Valor inválido, por favor preencha todos os campos corretamente" });
    }

    if (!descricao) {
        return res.status(422).json({ message: "Campo descricao inválido, por favor preencha todos os campos corretamente" });
    }

    return next()
};