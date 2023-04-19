import { database } from "../database/connect.js";
const collection = database.collection("users");

const findOneService = (objectQuery) => collection.findOne(objectQuery);
const insertOneService = (objectQuery) => collection.insertOne(objectQuery);

export default {
    findOneService,
    insertOneService
};