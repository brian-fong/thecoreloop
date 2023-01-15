// Official MongoDB Docs: https://www.mongodb.com/docs/drivers/node/current/

// Types
import { LAG } from "../types";
import { MongoClient, Collection, Document } from "mongodb";

export async function createMongoDBClient(uri: string): Promise<MongoClient> {
  try {
    const client: MongoClient = new MongoClient(uri);
    await client.connect();
    return client;
  } catch (error) {
    throw error;
  }
}

export async function getLatestLAG(client: MongoClient): Promise<number> {
  const lag_collection: Collection = client 
    .db("LAG_Database")
    .collection("Latest_LAG");

  const response: any = await lag_collection.findOne({ heading: "Latest LAG"});
  return response.number;
}

export async function readLAG(client: MongoClient, lag_number: number): Promise<LAG> {
  const lag_collection: Collection = client 
    .db("LAG_Database")
    .collection("LAG_Collection");

  const lag: any = await lag_collection.findOne({ number: lag_number });
  return lag;
}

export async function readLAGCollection(client: MongoClient): Promise<LAG[]> {
  const lag_collection: Collection = client 
    .db("LAG_Database")
    .collection("LAG_Collection");

  const documents: Document[] = await lag_collection.find().toArray();

  const lags: LAG[] = [];
  for (const document of documents) {
    const lag_obj = {
      heading: document.heading, 
      subheading: document.subheading, 
      message_id: document.message_id,
      number: document.number,
      date: document.date,
      special_insights: document.special_insights,
      content: document.content,
    };
    lags.push(lag_obj);
  }

  return lags;
}

