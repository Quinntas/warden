import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {eq} from "drizzle-orm";
import {categoryTable, courseCategoryTable,} from "@/lib/database/database-tables";


export const getCourseCategories = cache(async (courseId: string) => {
    try {
        const res = await db
            .select({
                id: courseCategoryTable.categoryId,
                name: categoryTable.name,
                created_at: categoryTable.created_at,
                updated_at: categoryTable.updated_at
            })
            .from(courseCategoryTable)
            .fullJoin(categoryTable, eq(courseCategoryTable.categoryId, categoryTable.id))
            .where(eq(courseCategoryTable.courseId, courseId))
        return {
            categories: res,
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
})