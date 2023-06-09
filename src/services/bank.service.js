import { database } from "../database/connect.js";
const collection = database.collection("bankaccounts");

const createAccount = (objectQuery) => collection.insertOne(objectQuery);
const findAccount = (objectQuery) => collection.findOne(objectQuery);
const updateAccount = (filter, objectQuery) => collection.updateOne(filter, objectQuery);

export default {
    createAccount,
    findAccount,
    updateAccount
};