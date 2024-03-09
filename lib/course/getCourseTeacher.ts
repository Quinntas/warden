import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {eq} from "drizzle-orm";
import {userTable} from "@/lib/database/database-tables";


export const getCourseTeacher = cache(async (teacherId: string) => {
    try {
        const res = await db
            .select({
                username: userTable.username,
                avatar: userTable.avatar,
            })
            .from(userTable)
            .where(eq(userTable.id, teacherId))
        return {
            teacher: res[0],
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
})