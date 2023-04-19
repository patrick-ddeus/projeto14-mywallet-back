import { v4 as uuidv4 } from "uuid";

const login = async (req, res) => {
    const UserinDb = req.user;

    try {
        const token = uuidv4();

        res.status(201).json({
            token,
            name: UserinDb.name,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

export default {
    login
};