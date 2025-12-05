import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

export async function POST(): Promise<Response> {
  try {
    if (!process.env.DATABASE_URL) {
      return Response.json(
        { error: "Database not configured" },
        { status: 500 }
      );
    }

    const records = await db.insert(advocates).values(advocateData).returning();

    if (!records || records.length === 0) {
      return Response.json(
        { error: "Failed to seed database" },
        { status: 500 }
      );
    }

    return Response.json({ advocates: records });
  } catch (error) {
    console.error("Error seeding database:", error);
    return Response.json(
      { 
        error: error instanceof Error ? error.message : "Failed to seed database" 
      },
      { status: 500 }
    );
  }
}
