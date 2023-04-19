import SessionService from "../services/session.service.js";

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: "Campo Authorization inválido!" });
    }

    const [schema, token] = authorization.split(" ");

    if (schema !== "Bearer") {
        return res.status(401).json({ message: "Token inválido!" });
    }

    try {
        const tokens = await SessionService.findUserSession({ token });

        if (tokens.length === 0) {
            return res.status(401).json({ message: "Token Expirado!" });
        }

        req.id = tokens[0].userId;
        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

export default authMiddleware;