import {CourseTeacher} from "@/app/course/[slug]/_components/course-teacher";
import {CourseEnroll} from "@/app/course/[slug]/_components/course-enroll";
import {CourseStudentBadge} from "@/app/course/[slug]/_components/course-student-badge";
import {CourseReviewsCount} from "@/app/course/[slug]/_components/course-reviews-count";
import {CourseOverviewCard} from "@/app/course/[slug]/_components/course-overview-card";
import {Suspense} from "react";
import {CourseCategories} from "@/app/course/[slug]/_components/course-categories";
import {validateSession} from "@/lib/auth/validate-session";
import {Course} from "@/lib/database/types/course";

interface CoursePresentationProps {
    course: Course
}

export async function CoursePresentation(props: CoursePresentationProps) {
    const {user} = await validateSession()

    return <div
        className={"flex flex-col sm:flex-row gap-[30px] sm:gap-[20px] items-center justify-between mt-[30px] sm:mt-0"}>
        <div className={"flex flex-col gap-[25px] sm:gap-[20px] w-full sm:w-auto sm:max-w-1/2"}>
            <h1 className={"font-bold text-2xl line-clamp-3"}>{props.course.title}</h1>
            <p className={"text-muted-foreground line-clamp-4 h-auto break-words"}>{props.course.description}</p>

            <CourseCategories categories={props.course.categories}/>

            <div className={"flex items-center gap-[4px]"}>
                <CourseStudentBadge count={props.course.enrolled}/>

                <CourseReviewsCount reviews={props.course.reviews}/>
            </div>

            {/*TODO: enroll placeholder for loading*/}
            <Suspense fallback={<span>Loading...</span>}>
                <CourseEnroll price={props.course.price} courseId={props.course.id} userId={user?.id!}/>
            </Suspense>

            <CourseTeacher updated_at={props.course.updated_at} teacher={props.course.teacher}/>
        </div>

        <CourseOverviewCard/>
    </div>
}