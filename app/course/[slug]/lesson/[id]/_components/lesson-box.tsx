import {Suspense} from "react";
import {LessonMeta} from "@/app/course/[slug]/lesson/[id]/_components/lesson-meta";
import {LessonNav} from "@/app/course/[slug]/lesson/[id]/_components/lesson-nav";
import {Lesson} from "@/lib/database/types/lesson";
import {LessonWatch} from "@/lib/database/types/lessonWatch";
import LessonVideo from "@/app/course/[slug]/lesson/[id]/_components/lesson-video";

interface LessonBoxProps {
    slug: string
    id: string
    lesson: Lesson
    userId: string
    lessonWatch: LessonWatch
}

export async function LessonBox(props: LessonBoxProps) {


    return <>
        <div className={"w-[100%] h-[300px] lg:h-[600px] "}>
            <LessonVideo url={props.lesson.videoUrl!}/>
        </div>

        <LessonMeta
            title={props.lesson.title!}
            description={props.lesson.description!}
            views={props.lesson.viewCount!}
            date={props.lesson.created_at!}
        />

        <Suspense>
            <LessonNav
                userId={props.userId}
                id={props.id}
                courseSlug={props.slug}
            />
        </Suspense>
    </>
}