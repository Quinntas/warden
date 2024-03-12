import {Button} from "@/components/ui/button";
import {RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine} from "react-icons/ri";
import Link from "next/link";
import {getLessons} from "@/lib/course/getLessons";
import {Suspense} from "react";
import {getLessonWatch} from "@/lib/course/lessonWatch";

interface LessonNavItemProps {
    title: string;
    isCurrent: boolean
    link: string
    lessonId: string
    userId: string
}

async function LessonNavItem(props: LessonNavItemProps) {
    const lessonWatch = await getLessonWatch(props.lessonId, props.userId)

    return <Button
        variant={"outline"}
        disabled={props.isCurrent}
        className={"w-full border-dashed bg-grid-default"}>
        <Link href={props.link} className={"font-[500px] text-lg flex gap-2 items-center justify-between w-full"}>
            <span>{props.title}</span>
            {!lessonWatch.isError && lessonWatch.lessonWatch ?
                <RiCheckboxBlankCircleFill size={18} color={"purple"}/> :
                <RiCheckboxBlankCircleLine size={18} color={"purple"}/>
            }</Link>
    </Button>
}

function numberToTime(number: number) {
    const minutes = Math.floor(number / 60)
    const seconds = number % 60
    return `${minutes}:${seconds === 0 ? "00" : seconds}`
}

interface LessonNavProps {
    id: string
    courseSlug: string
    userId: string
}


export async function LessonNav(props: LessonNavProps) {
    const lessons = await getLessons(props.courseSlug)

    if (lessons.isError || !lessons.lessons) return null

    return <div className={"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[15px] mt-[4px] sm:mt-0"}>
        {lessons.lessons.map((lesson, index) => {
            return <>
                <Suspense>
                    <LessonNavItem
                        lessonId={lesson.id}
                        title={`${lesson.order}. ${lesson.title} - ${numberToTime(lesson.duration)}`}
                        userId={props.userId}
                        isCurrent={lesson.id === props.id}
                        link={`/course/${props.courseSlug}/lesson/${lesson.id}`}
                        key={`course-lesson-nav-${lesson.id}-${index}`}/>
                </Suspense>
            </>
        })}
    </div>
}