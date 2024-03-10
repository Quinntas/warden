import {Navbar} from "@/app/_components/navbar";
import {Footer} from "@/app/_components/footer";
import {PageBox} from "@/app/_components/page-box";
import {CoursePresentation} from "@/app/course/[slug]/_components/course-presentation";
import {CourseLessonBox} from "@/app/course/[slug]/_components/course-lesson-box";
import {CourseReviewsBox} from "@/app/course/[slug]/_components/course-reviews-box";
import {Metadata} from "next";
import {getCourse} from "@/lib/course/getCourse";
import {getAllCourses} from "@/lib/course/getAllCourses";
import {notFound} from "next/navigation";

export async function generateStaticParams() {
    const courses = await getAllCourses()
    if (courses.isError || !courses.courses) return []
    return courses.courses.map((course) => ({
        slug: course.slug
    }))
}

export async function generateMetadata({params}: { params: { slug: string } }): Promise<Metadata> {
    const course = await getCourse(params.slug)
    if (course.isError || !course.course) return {
        title: "Course not found",
        description: "The course you are looking for does not exist"
    }
    return {
        title: course.course.title,
        description: course.course.description
    }
}

export default async function Course({params}: { params: { slug: string } }) {
    const courseRes = await getCourse(params.slug)

    if (!courseRes.course)
        return notFound()

    return <PageBox>
        <Navbar/>

        <CoursePresentation course={courseRes.course}/>

        <CourseLessonBox lessons={courseRes.course.lessons} courseSlug={params.slug}/>

        <CourseReviewsBox reviews={courseRes.course.reviews}/>

        <Footer/>
    </PageBox>
}