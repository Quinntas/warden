import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {lessonTable} from "@/lib/database/database-tables";


export const getAllLessons = cache(async () => {
    try {
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