import {db} from "@/lib/database/lucia-database-adapter";
import {and, eq} from "drizzle-orm";
import {lessonWatchTable} from "@/lib/database/database-tables";
import {cache} from "react";
import {LessonWatch} from "@/lib/database/types/lessonWatch";
import {v4} from "uuid";

export const updateLessonWatch = async (lessonId: string, userId: string, timeWatched: number) => {
    try {
        await db
            .update(lessonWatchTable)
            .set({
                timeWatched
            })
            .where(and(
                eq(lessonWatchTable.lessonId, lessonId),
                eq(lessonWatchTable.userId, userId)))
        return {
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }

}

export const createLessonWatch = async (lessonId: string, userId: string, timeWatched: number) => {
    try {
        const id = v4()

        await db
            .insert(lessonWatchTable)
            .values({
                id,
                lessonId,
                userId,
                timeWatched
            })
        return {
            lessonWatch: {
                id,
                timeWatched: 0
            } as LessonWatch,
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
}

export const getLessonWatch = cache(async (lessonId: string, userId: string) => {
    try {
        const res: LessonWatch[] = await db
            .select()
            .from(lessonWatchTable)
            .where(and(
                eq(lessonWatchTable.lessonId, lessonId),
                eq(lessonWatchTable.userId, userId)))
        return {
            lessonWatch: res[0],
            isError: false
        }
    } catch (err: any) {
        return {
            error: err.message,
            isError: true
        }
    }
})