import {Navbar} from "@/app/_components/navbar";
import {Footer} from "@/app/_components/footer";
import {PageBox} from "@/app/_components/page-box";
import {validateSession} from "@/lib/auth/validate-session";
import {getEnrolledStudent} from "@/lib/course/getEnrolledStudent";
import {notFound, redirect} from "next/navigation";
import {LessonBox} from "@/app/course/[slug]/lesson/[id]/_components/lesson-box";
import {Metadata} from "next";
import {getLesson} from "@/lib/course/getLesson";
import {getAllCourses} from "@/lib/course/getAllCourses";
import {getAllLessonsWithCourseId} from "@/lib/course/getAllLessons";
import {createLessonWatch, getLessonWatch} from "@/lib/course/lessonWatch";

export async function generateStaticParams() {
    const courses = await getAllCourses()
    if (courses.isError || !courses.courses) return []

    let params: { id: string, slug: string }[] = []

    for (const course of courses.courses) {
        const lessons = await getAllLessonsWithCourseId(course.id)
        if (lessons.isError || !lessons.lessons) continue
        for (const lesson of lessons.lessons) {
            params.push({id: lesson.id!, slug: course.slug})
        }
    }

    return params
}

export async function generateMetadata({params}: { params: { id: string } }): Promise<Metadata> {
    const lessonRes = await getLesson(params.id)
    if (lessonRes.isError || !lessonRes.lesson) return {
        title: "Lesson not found",
        description: "The lesson you are looking for does not exist"
    }
    return {
        title: lessonRes.lesson.title,
        description: lessonRes.lesson.description
    }
}


export default async function Lesson({params}: { params: { slug: string, id: string } }) {
    const {user} = await validateSession()

    if (!user)
        return redirect(`/course/${params.slug}`)

    const enrolledRes = await getEnrolledStudent(params.slug, user.id)

    if (enrolledRes.isError || !enrolledRes.isEnrolled)
        return redirect(`/course/${params.slug}`)

    const lessonRes = await getLesson(params.id)

    if (lessonRes.isError || !lessonRes.lesson) return notFound()

    await createLessonWatch(params.id, user.id, 0)
    const watchedRes = await getLessonWatch(params.id, user.id)

    return <PageBox>
        <Navbar/>

        <LessonBox
            userId={user.id}
            slug={params.slug}
            id={params.id}
            lesson={lessonRes.lesson}
            lessonWatch={watchedRes.lessonWatch!}/>

        <Footer/>
    </PageBox>
}