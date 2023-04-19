import BankService from "../services/bank.service";

const deposit = async (req, res) => {
    const { valor, descricao } = req.body;
    const id = req.id;
    try {
        const transaction = { balance: valor, description: descricao, date: new Date() };
        await BankService.updateAccount({ userId: id }, { $push: { transactions: transaction } });
        res.status(201).json({ message: "Depósito realizado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    deposit
};