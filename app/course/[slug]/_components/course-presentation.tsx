import {CourseTeacher} from "@/app/course/[slug]/_components/course-teacher";
import {CourseEnroll} from "@/app/course/[slug]/_components/course-enroll";
import {CourseStudentBadge} from "@/app/course/[slug]/_components/course-student-badge";
import {CourseReviewsCount} from "@/app/course/[slug]/_components/course-reviews-count";
import {CourseOverviewCard} from "@/app/course/[slug]/_components/course-overview-card";
import {Suspense} from "react";
import {getCourse} from "@/lib/course/getCourse";
import {notFound} from "next/navigation";
import {CourseCategories} from "@/app/course/[slug]/_components/course-categories";
import {getEnrolledStudentWithCourseId} from "@/lib/course/getEnrolledStudentWithCourseId";
import {validateSession} from "@/lib/auth/validate-session";

interface CoursePresentationProps {
    slug: string
}

export async function CoursePresentation(props: CoursePresentationProps) {
    const course = await getCourse(props.slug)

    if (course.isError || !course.course) return notFound()

    const {user} = await validateSession()
    const enrolled = await getEnrolledStudentWithCourseId(course.course.id, user?.id)

    return <div
        className={"flex flex-col sm:flex-row gap-[30px] sm:gap-[20px] items-center justify-between mt-[30px] sm:mt-0"}>
        <div className={"flex flex-col gap-[25px] sm:gap-[20px] w-full sm:w-auto sm:max-w-1/2"}>
            <h1 className={"font-bold text-2xl line-clamp-3"}>{course.course.title}</h1>
            <p className={"text-muted-foreground line-clamp-4 h-auto break-words"}>{course.course.description}</p>

            <Suspense>
                <CourseCategories coruse_id={course.course.id}/>
            </Suspense>

            <div className={"flex items-center gap-[15px]"}>
                <Suspense>
                    <CourseStudentBadge count={course.course!.enrolled}/>
                </Suspense>

                <CourseReviewsCount courseSlug={course.course.slug}/>
            </div>

            <Suspense>
                <CourseEnroll price={course.course.price} isEnrolled={enrolled.isEnrolled!}/>
            </Suspense>

            <Suspense>
                <CourseTeacher updated_at={course.course.updated_at} teacherId={course.course.teacherId}/>
            </Suspense>
        </div>

        <CourseOverviewCard/>
    </div>
}