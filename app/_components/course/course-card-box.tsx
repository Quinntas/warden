import {CourseCard} from "@/app/_components/course/course-card";
import {getAllCourses} from "@/lib/course/getAllCourses";
import {cn} from "@/lib/utils";


export async function CourseCardBox() {
    const courses = await getAllCourses()

    if (courses.isError || !courses.courses) return <p>{courses.error}</p>

    return <div className={"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[15px] my-[20px]"}>
        {courses.courses!.map((course, index) => {
            return <>
                <CourseCard
                    slug={course.slug!}
                    title={course.title!}
                    description={course.description!}
                    price={course.price!}
                    categories={course.categories!}
                    containerClassName={cn(index === 0 && "sm:col-span-2")}
                    key={`course-card-${course.id}-${index}`}/>
            </>
        })}
    </div>
}
