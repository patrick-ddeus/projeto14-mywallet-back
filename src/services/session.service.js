import { database } from "../database/connect.js";

const MINUTE_IN_SECONDS = 60;
const SECONDS_TO_EXPIRE = 30;

const collection = database.collection("sessions");
const expireTime = SECONDS_TO_EXPIRE * MINUTE_IN_SECONDS;

const findUserSession = (objectQuery) => collection.find(objectQuery).toArray();
const createUserSession = (objectQuery) => {
    collection.createIndex({ createdAt: 2 }, { expireAfterSeconds: expireTime });
    collection.insertOne(objectQuery);
};

export default {
    findUserSession,
    createUserSession
};