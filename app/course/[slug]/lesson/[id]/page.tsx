import {Navbar} from "@/app/_components/navbar";
import {Footer} from "@/app/_components/footer";
import {PageBox} from "@/app/_components/page-box";
import {validateSession} from "@/lib/auth/validate-session";
import {getEnrolledStudent} from "@/lib/course/getEnrolledStudent";
import {redirect} from "next/navigation";
import {LessonBox} from "@/app/course/[slug]/lesson/[id]/_components/lesson-box";
import {Suspense} from "react";

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