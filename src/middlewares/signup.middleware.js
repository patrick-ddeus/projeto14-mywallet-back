import UserService from "../services/user.service.js";

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