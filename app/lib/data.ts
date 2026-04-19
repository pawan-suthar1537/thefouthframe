import { getDb } from "./mongodb";
import type { SiteContent } from "./types";

/**
 * Fetch the single siteContent document from MongoDB.
 * Used by server components to load dynamic data.
 * Cached per-request by Next.js (deduped within a single render).
 */
export async function getSiteContent(): Promise<SiteContent> {
  const db = await getDb();
  const doc = await db.collection("siteContent").findOne({});

  if (!doc) {
    throw new Error("Site content not found in database. Run the seed script first: npx tsx app/lib/seed.ts");
  }

  // Strip MongoDB _id for serialization
  const { _id, createdAt, updatedAt, ...content } = doc as Record<string, unknown>;
  return content as unknown as SiteContent;
}
