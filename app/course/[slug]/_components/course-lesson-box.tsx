import {LessonCard} from "@/app/course/[slug]/_components/lesson/lesson-card";

export function CourseLessonBox() {
    return <>
        <h1 className={"text-center font-semibold text-2xl my-[20px]"}>Lessons</h1>

        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-[15px]"}>
            <LessonCard/>
            <LessonCard/>
            <LessonCard/>
            <LessonCard/>
        </div>
    </>
}