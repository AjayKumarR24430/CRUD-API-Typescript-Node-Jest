import { MongoClient } from 'mongodb';

let MONGO_URI = "mongodb://localhost:27017/CRUDAPIDb";

export const client = new MongoClient(MONGO_URI);
export const db = client.db();
