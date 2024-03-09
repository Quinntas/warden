import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {courseTable} from "@/lib/database/database-tables";

export const getAllCourses = cache(async () => {
    try {
        const courseRes = await db
            .select(
                {
                    id: courseTable.id,
                    title: courseTable.title,
                    slug: courseTable.slug,
                    description: courseTable.description,
                    price: courseTable.price,
                }
            )
            .from(courseTable)
        return {
            courses: courseRes,
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
})