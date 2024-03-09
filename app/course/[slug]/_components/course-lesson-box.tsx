import {LessonCard} from "@/app/course/[slug]/_components/lesson/lesson-card";
import {getLessons} from "@/lib/course/getLessons";

interface CourseLessonBoxProps {
    courseSlug: string
}

export async function CourseLessonBox(props: CourseLessonBoxProps) {
    const lessons = await getLessons(props.courseSlug)

    if (lessons.isError || !lessons.lessons) return null

    return <>
        <h1 className={"text-center font-semibold text-2xl my-[20px]"}>Lessons</h1>

        <div className={"grid grid-cols-1 sm:grid-cols-2 gap-[15px]"}>
            {lessons.lessons.map((lesson, index) => {
                return <LessonCard
                    title={lesson.title}
                    description={lesson.description}
                    order={lesson.order}
                    id={lesson.id}
                    courseSlug={props.courseSlug}
                    key={`course-${lesson.id}-${index}`}/>
            })}
        </div>
    </>
}