import {CourseTeacher} from "@/app/course/[slug]/_components/course-teacher";
import {CourseEnroll} from "@/app/course/[slug]/_components/course-enroll";
import {CourseStudentBadge} from "@/app/course/[slug]/_components/course-student-badge";
import {CourseReviewsCount} from "@/app/course/[slug]/_components/course-reviews-count";
import {FaNodeJs} from "react-icons/fa6";
import {SiTypescript} from "react-icons/si";
import {CourseOverviewCard} from "@/app/course/[slug]/_components/course-overview-card";

export function CoursePresentation() {
    return <div
        className={"flex flex-col sm:flex-row gap-[30px] sm:gap-[20px] items-center justify-between mt-[30px] sm:mt-0"}>
        <div className={"flex flex-col gap-[25px] sm:gap-[20px] max-w-full sm:max-w-1/2"}>
            <h1 className={"font-bold text-2xl line-clamp-3"}>Node.js and TypeScript</h1>
            <p className={"text-muted-foreground line-clamp-4 h-auto"}>Learn how to build a REST API using Node.js and
                TypeScript
            </p>

            <div className={"flex gap-[15px]"}>
                <FaNodeJs size={25}/>
                <SiTypescript size={25}/>
            </div>

            <div className={"flex items-center gap-[15px]"}>
                <CourseStudentBadge/>

                <CourseReviewsCount/>
            </div>

            <CourseEnroll/>

            <CourseTeacher/>
        </div>

        <CourseOverviewCard/>
    </div>
}