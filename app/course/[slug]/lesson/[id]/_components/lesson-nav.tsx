import {Button} from "@/components/ui/button";
import {RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine} from "react-icons/ri";
import Link from "next/link";
import {getLessons} from "@/lib/course/getLessons";

interface LessonNavItemProps {
    title: string;
    isWatched: boolean;
    isCurrent: boolean
    link: string
}

function LessonNavItem(props: LessonNavItemProps) {
    return <Button
        variant={"outline"}
        disabled={props.isCurrent}
        className={"w-full  border-dashed bg-grid-default"}>
        <Link href={props.link} className={"font-[500px] text-lg flex gap-2 items-center justify-between w-full"}>
            <span>{props.title}</span>
            {props.isWatched ?
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
}


export async function LessonNav(props: LessonNavProps) {
    const lessons = await getLessons(props.courseSlug)

    if (lessons.isError || !lessons.lessons) return null

    return <div className={"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[15px] mt-[4px] sm:mt-0"}>
        {lessons.lessons.map((lesson, index) => {
            return <LessonNavItem
                title={`${lesson.order}. ${lesson.title} - ${numberToTime(lesson.duration)}`}
                isWatched={false}
                isCurrent={lesson.id === props.id}
                link={`/course/${props.courseSlug}/lesson/${lesson.id}`}
                key={`lesson-nav-${lesson.id}-${index}`}/>
        })}
    </div>
}