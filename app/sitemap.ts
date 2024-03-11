import {MetadataRoute} from "next";
import {getAllCourses} from "@/lib/course/getAllCourses";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const courses = await getAllCourses()
    const courseUrls = courses.courses!.map(course => {
        return {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/course/${course.slug}`,
            lastModified: course.updated_at
        }
    })

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
        ...courseUrls
    ]
}
