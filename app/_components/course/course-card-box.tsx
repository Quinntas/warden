import {CourseCard} from "@/app/_components/course/course-card";

export function CourseCardBox() {
    return <div className={"grid grid-cols-1 sm:grid-cols-2 gap-[15px] my-[20px]"}>
        <CourseCard className={"sm:col-span-2"}/>

        <CourseCard/>

        <CourseCard/>
    </div>
}
