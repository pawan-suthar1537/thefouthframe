import { MongoClient, Db } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env");
}

interface MongoCache {
  client: MongoClient | null;
  db: Db | null;
  promise: Promise<MongoClient> | null;
}

// Cached connection — prevents multiple connections in dev (HMR)
const cached: MongoCache = (globalThis as unknown as { _mongoCache?: MongoCache })._mongoCache ?? {
  client: null,
  db: null,
  promise: null,
};

if (!(globalThis as unknown as { _mongoCache?: MongoCache })._mongoCache) {
  (globalThis as unknown as { _mongoCache: MongoCache })._mongoCache = cached;
}

export async function getDb(): Promise<Db> {
  if (cached.db) return cached.db;

  if (!cached.promise) {
    cached.promise = MongoClient.connect(MONGODB_URI);
  }

  cached.client = await cached.promise;
  cached.db = cached.client.db(); // uses db name from URI
  return cached.db;
}

export async function getCollection<T extends Document = Document>(name: string) {
  const db = await getDb();
  return db.collection<T>(name);
}
