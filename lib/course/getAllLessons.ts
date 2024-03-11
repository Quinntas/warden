import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {lessonTable} from "@/lib/database/database-tables";
import {eq} from "drizzle-orm";
import {Lesson} from "@/lib/database/types/lesson";


export const getAllLessonsWithCourseId = cache(async (courseId: string) => {
    try {
        const lessonsRes: Lesson[] = await db
            .select()
            .from(lessonTable)
            .where(eq(lessonTable.courseId, courseId))
        return {
            lessons: lessonsRes,
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
})