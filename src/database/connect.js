import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true });

const ConnectDatabase = () => {
    client.connect().then(() => {
        console.log("Conexão estabelecida com sucesso!");
    }).catch(err => console.error(err.message));
};

export const database = client.db();

export default ConnectDatabase;