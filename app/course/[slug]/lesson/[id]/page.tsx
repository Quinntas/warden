import {Navbar} from "@/app/_components/navbar";
import {Footer} from "@/app/_components/footer";
import {PageBox} from "@/app/_components/page-box";
import {validateSession} from "@/lib/auth/validate-session";
import {getEnrolledStudent} from "@/lib/course/getEnrolledStudent";
import {redirect} from "next/navigation";
import {LessonBox} from "@/app/course/[slug]/lesson/[id]/_components/lesson-box";
import {Suspense} from "react";
import {Metadata} from "next";
import {getLesson} from "@/lib/course/getLesson";


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

    const enrolled = await getEnrolledStudent(params.slug, user.id)

    return <PageBox>
        <Navbar/>

        <Suspense>
            <LessonBox slug={params.slug} id={params.id} isEnrolled={enrolled.isEnrolled!}/>
        </Suspense>

        <Footer/>
    </PageBox>
}