import {MetadataRoute} from "next";
import {getAllCoursesAndOnlyCourses} from "@/lib/course/getAllCourses";
import {getAllLessonsWithCourseId} from "@/lib/course/getAllLessons";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const courses = await getAllCoursesAndOnlyCourses()
    const courseUrls = courses.courses!.map(course => {
        return {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/course/${course.slug}`,
            lastModified: course.updated_at
        }
    })

    let lessonUrls: { url: string, lastModified: Date }[] = []
    for (const course of courses.courses!) {
        const lessons = await getAllLessonsWithCourseId(course.id)
        for (const lesson of lessons.lessons!) {
            lessonUrls.push({
                url: `${process.env.NEXT_PUBLIC_APP_URL}/course/${course.slug}/lesson/${lesson.id}`,
                lastModified: lesson.updated_at!
            })
        }
    }

    return [
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}`,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/login`
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/signup`
        },
        ...courseUrls,
        ...lessonUrls
    ]
}
