import BankService from "../services/bank.service.js";

const deposit = async (req, res) => {
    const { valor, descricao } = req.body;
    const id = req.id;

    try {
        const transaction = {
            type: "deposito",
            balance: valor,
            description: descricao,
            date: new Date()
        };

        await BankService.updateAccount(
            { userId: id },
            {
                $push: { transactions: { $each: [transaction], $position: 0 } }
            });

        res.status(201).json({ message: "Depósito realizado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const withdraw = async (req, res) => {
    const { valor, descricao } = req.body;
    const id = req.id;

    try {
        const transaction = {
            type: "retirada",
            balance: valor,
            description: descricao,
            date: new Date()
        };

        await BankService.updateAccount(
            { userId: id },
            {
                $push: { transactions: { $each: [transaction], $position: 0 } }
            }
        );

        res.status(201).json({ message: "Retirada realizada com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTransactions = async (req, res) => {
    const id = req.id;
    try {
        const UserBankAccount = await BankService.findAccount({ userId: id });
        res.status(201).json(UserBankAccount.transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    deposit,
    withdraw,
    getTransactions
};