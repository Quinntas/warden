import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {and, eq} from "drizzle-orm";
import {courseEnrollmentTable} from "@/lib/database/database-tables";


export const getEnrolledStudentWithCourseId = cache(async (courseId: string, userId?: string) => {
    try {
        if (!userId)
            return {
                isEnrolled: false,
                isError: false
            }

        const res = await db
            .select({
                id: courseEnrollmentTable.id,
            })
            .from(courseEnrollmentTable)
            .where(and(
                eq(courseEnrollmentTable.courseId, courseId),
                eq(courseEnrollmentTable.userId, userId)
            ))

        return {
            isEnrolled: !!res[0],
            isError: false
        }
    } catch (err: any) {
        return {
            isEnrolled: false,
            error: err.message,
            isError: true
        }
    }
})