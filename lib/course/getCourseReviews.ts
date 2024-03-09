import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {eq} from "drizzle-orm";
import {courseReviewTable, courseTable, reviewTable} from "@/lib/database/database-tables";


export const getCourseReviews = cache(async (courseSlug: string) => {
    try {
        const courseId = await db
            .select({
                id: courseTable.id
            })
            .from(courseTable)
            .where(eq(courseTable.slug, courseSlug))

        if (!courseId || courseId.length === 0)
            return {
                error: "Course not found",
                isError: true
            }

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
            .where(eq(courseReviewTable.courseId, courseId[0].id))
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