import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {eq} from "drizzle-orm";
import {courseTable, lessonTable} from "@/lib/database/database-tables";


export const getLessons = cache(async (courseSlug: string) => {
    try {
        const courseId = await db
            .select({
                id: courseTable.id
            })
            .from(courseTable)
            .where(eq(courseTable.slug, courseSlug))

        if (!courseId[0])
            return {
                error: "Course not found",
                isError: true
            }

        const lessonsRes = await db
            .select(
                {
                    id: lessonTable.id,
                    title: lessonTable.title,
                    description: lessonTable.description,
                    duration: lessonTable.duration,
                    order: lessonTable.order
                }
            )
            .from(lessonTable)
            .where(eq(lessonTable.courseId, courseId[0].id))
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