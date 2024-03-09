import {Suspense} from "react";
import {VideoPlayer} from "@/components/video-player";
import {getLesson} from "@/lib/course/getLesson";
import {notFound} from "next/navigation";
import {LessonMeta} from "@/app/course/[slug]/lesson/[id]/_components/lesson-meta";
import {LessonNav} from "@/app/course/[slug]/lesson/[id]/_components/lesson-nav";

interface LessonBoxProps {
    slug: string
    id: string
    isEnrolled: boolean
}

export async function LessonBox(props: LessonBoxProps) {
    const lesson = await getLesson(props.id)

    if (lesson.isError || !lesson.lesson) return notFound()

    return <>
        <Suspense>
            <div className={"w-[100%] h-[300px] lg:h-[600px]"}>
                <VideoPlayer
                    url={lesson.lesson.videoUrl}/>
            </div>
        </Suspense>

        <LessonMeta
            title={lesson.lesson.title}
            description={lesson.lesson.description}
            views={lesson.lesson.viewCount}
            date={lesson.lesson.created_at}
        />

        <Suspense>
            <LessonNav
                id={props.id}
                courseSlug={props.slug}
            />
        </Suspense>
    </>
}