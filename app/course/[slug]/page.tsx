import {Navbar} from "@/app/_components/navbar";
import {Footer} from "@/app/_components/footer";
import {PageBox} from "@/app/_components/page-box";
import {CoursePresentation} from "@/app/course/[slug]/_components/course-presentation";
import {CourseLessonBox} from "@/app/course/[slug]/_components/course-lesson-box";
import {CourseReviewsBox} from "@/app/course/[slug]/_components/course-reviews-box";

export default function Course() {
    return <PageBox>
        <Navbar/>

        <CoursePresentation/>

        <CourseLessonBox/>

        <CourseReviewsBox/>

        <Footer/>
    </PageBox>
}