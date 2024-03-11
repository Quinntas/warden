import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {eq} from "drizzle-orm";
import {
    categoryTable,
    courseCategoryTable,
    courseReviewTable,
    courseTable,
    lessonTable,
    reviewTable,
    userTable
} from "@/lib/database/database-tables";
import {Course, RawCourse} from "@/lib/database/types/course";
import {User} from "@/lib/database/types/user";
import {Review} from "@/lib/database/types/review";
import {Category} from "@/lib/database/types/category";
import {Lesson} from "@/lib/database/types/lesson";

interface GetCourseResponse {
    course: Course | null
    isError: boolean
    error?: string
}

export const getCourse = cache(async (slug: string): Promise<GetCourseResponse> => {
    try {
        const courseRes: RawCourse[] = await db
            .select()
            .from(courseTable)
            .where(eq(courseTable.slug, slug))

        if (courseRes.length === 0)
            return {
                course: null,
                isError: true,
                error: "Course not found"
            }

        const teacherRes: User[] = await db
            .select()
            .from(userTable)
            .where(eq(userTable.id, courseRes[0].teacherId))

        const reviewsRes: Review[] = await db
            .select({
                id: courseReviewTable.reviewId,
                review: reviewTable.review,
                rating: reviewTable.rating,
                created_at: reviewTable.created_at,
                updated_at: reviewTable.updated_at
            })
            .from(courseReviewTable)
            .fullJoin(reviewTable, eq(courseReviewTable.reviewId, reviewTable.id))
            .where(eq(courseReviewTable.courseId, courseRes[0].id))

        const categoriesRes: Category[] = await db
            .select({
                id: courseCategoryTable.categoryId,
                name: categoryTable.name,
                created_at: categoryTable.created_at,
                updated_at: categoryTable.updated_at
            })
            .from(courseCategoryTable)
            .fullJoin(categoryTable, eq(courseCategoryTable.categoryId, categoryTable.id))
            .where(eq(courseCategoryTable.courseId, courseRes[0].id))

        const lessonsRes: Lesson[] = await db
            .select(
                {
                    id: lessonTable.id,
                    title: lessonTable.title,
                    description: lessonTable.description,
                    duration: lessonTable.duration,
                    order: lessonTable.order,
                    created_at: lessonTable.created_at,
                    updated_at: lessonTable.updated_at,
                    videoUrl: lessonTable.videoUrl,
                    viewCount: lessonTable.viewCount
                }
            )
            .from(lessonTable)
            .where(eq(lessonTable.courseId, courseRes[0].id))

        return {
            course: {
                ...courseRes[0],
                teacher: teacherRes[0],
                reviews: reviewsRes,
                categories: categoriesRes,
                lessons: lessonsRes
            },
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            course: null,
            isError: true
        }
    }
})