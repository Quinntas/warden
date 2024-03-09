import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {eq} from "drizzle-orm";
import {courseReviewTable, reviewTable} from "@/lib/database/database-tables";


export const getCourseReviews = cache(async (courseId: string) => {
    try {
        const res = await db
            .select({
                id: courseReviewTable.reviewId,
                review: reviewTable.review,
                rating: reviewTable.rating,
                created_at: reviewTable.created_at,
                updated_at: reviewTable.updated_at
            })
            .from(courseReviewTable)
            .fullJoin(reviewTable, eq(courseReviewTable.reviewId, reviewTable.id))
            .where(eq(courseReviewTable.courseId, courseId))
        return {
            reviews: res,
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
})