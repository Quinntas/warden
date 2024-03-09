import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {eq} from "drizzle-orm";
import {courseReviewTable} from "@/lib/database/database-tables";


export const getCourseReviewsCount = cache(async (courseId: string) => {
    try {
        const res = await db
            .select({
                id: courseReviewTable.reviewId,
            })
            .from(courseReviewTable)
            .where(eq(courseReviewTable.courseId, courseId))
        return {
            reviewsLength: res.length,
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
})