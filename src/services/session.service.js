import { database } from "../database/connect.js";

const MINUTE_IN_SECONDS = 60;
const MINUTES_TO_EXPIRE = 30;

const collection = database.collection("sessions");
const expireTime = MINUTES_TO_EXPIRE * MINUTE_IN_SECONDS;

const findUserSession = (objectQuery) => collection.find(objectQuery).toArray();
const createUserSession = (objectQuery) => {
    collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: expireTime });
    collection.insertOne(objectQuery);
};

export default {
    findUserSession,
    createUserSession
};