import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {eq} from "drizzle-orm";
import {lessonTable} from "@/lib/database/database-tables";


export const getLesson = cache(async (lessonId: string) => {
    try {
        const lessonsRes = await db
            .select()
            .from(lessonTable)
            .where(eq(lessonTable.id, lessonId))
        return {
            lesson: lessonsRes[0],
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
})