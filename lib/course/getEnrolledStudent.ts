import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {and, eq} from "drizzle-orm";
import {courseEnrollmentTable, courseTable} from "@/lib/database/database-tables";


export const getEnrolledStudent = cache(async (courseSlug: string, userId: string) => {
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

        const res = await db
            .select({
                id: courseEnrollmentTable.id,
            })
            .from(courseEnrollmentTable)
            .where(and(
                eq(courseEnrollmentTable.courseId, courseId[0].id),
                eq(courseEnrollmentTable.userId, userId)
            ))

        return {
            isEnrolled: !!res[0],
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
})