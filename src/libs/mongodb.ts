import { Db, MongoClient } from "mongodb";
import "server-only";

declare global {
  var _mongoClient: MongoClient | undefined;
  var _mongoDb: Db | undefined;
}

export default async function connectDB() {
  if (global._mongoClient && global._mongoDb) {
    return { client: global._mongoClient, db: global._mongoDb };
  }
  const db_uri = process.env.DATABASE_URI_FULL;
  if (!db_uri) {
    throw new Error("No database uri found");
  }
  const client = new MongoClient(db_uri!);

  await client.connect();
  const db = client.db("zooloo_db");
  global._mongoClient = client;
  global._mongoDb = db;

  return { client, db };
}
