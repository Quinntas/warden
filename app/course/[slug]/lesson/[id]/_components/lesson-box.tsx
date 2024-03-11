import {Suspense} from "react";
import {VideoPlayer} from "@/components/video-player";
import {LessonMeta} from "@/app/course/[slug]/lesson/[id]/_components/lesson-meta";
import {LessonNav} from "@/app/course/[slug]/lesson/[id]/_components/lesson-nav";
import {Lesson} from "@/lib/database/types/lesson";

interface LessonBoxProps {
    slug: string
    id: string
    lesson: Lesson
}

export async function LessonBox(props: LessonBoxProps) {
    return <>
        <div className={"w-[100%] h-[300px] lg:h-[600px] "}>
            <VideoPlayer
                url={props.lesson.videoUrl!}/>
        </div>

        <LessonMeta
            title={props.lesson.title!}
            description={props.lesson.description!}
            views={props.lesson.viewCount!}
            date={props.lesson.created_at!}
        />

        <Suspense>
            <LessonNav
                id={props.id}
                courseSlug={props.slug}
            />
        </Suspense>
    </>
}