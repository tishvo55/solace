import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";
import { Advocate } from "../../../types/advocate";
import { ilike, or, sql } from "drizzle-orm";

export async function GET(request: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term") || "";

    let data: Advocate[];

    if (process.env.DATABASE_URL) {
      if (term) {
        // Search across multiple fields
        data = await (db as any)
          .select()
          .from(advocates)
          .where(
            or(
              ilike(advocates.firstName, `%${term}%`),
              ilike(advocates.lastName, `%${term}%`),
              ilike(advocates.city, `%${term}%`),
              ilike(advocates.degree, `%${term}%`),
              // Use SQL operator for array search
              sql`${advocates.specialties}::text ILIKE ${`%${term}%`}`,
              // full name search
              sql`CONCAT(${advocates.firstName}, ' ', ${
                advocates.lastName
              }) ILIKE ${`%${term}%`}`
            )
          );
      } else {
        data = await (db as any).select().from(advocates);
      }
    } else {
      // get all advocates
      data = await db.select().from(advocates);
    }

    if (!data || data.length === 0) {
      return Response.json(
        { data: [], error: "No advocates found" },
        { status: 404 }
      );
    }

    return Response.json({ data });
  } catch (error) {
    console.error("Error fetching advocates:", error);
    return Response.json(
      {
        data: [],
        error:
          error instanceof Error ? error.message : "Failed to fetch advocates",
      },
      { status: 500 }
    );
  }
}
