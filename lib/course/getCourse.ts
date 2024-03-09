import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {eq} from "drizzle-orm";
import {courseTable} from "@/lib/database/database-tables";


export const getCourse = cache(async (slug: string) => {
    try {
        const courseRes = await db
            .select()
            .from(courseTable)
            .where(eq(courseTable.slug, slug))
        return {
            course: courseRes[0],
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
})