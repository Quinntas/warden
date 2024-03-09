import {Navbar} from "@/app/_components/navbar";
import {Footer} from "@/app/_components/footer";
import {PageBox} from "@/app/_components/page-box";
import {CoursePresentation} from "@/app/course/[slug]/_components/course-presentation";
import {CourseLessonBox} from "@/app/course/[slug]/_components/course-lesson-box";
import {CourseReviewsBox} from "@/app/course/[slug]/_components/course-reviews-box";
import {Suspense} from "react";

export default async function Course({params}: { params: { slug: string } }) {
    return <PageBox>
        <Navbar/>

        <CoursePresentation slug={params.slug}/>

        <CourseLessonBox/>

        <Suspense>
            <CourseReviewsBox/>
        </Suspense>

        <Footer/>
    </PageBox>
}