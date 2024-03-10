import {getCourseCategories} from "@/lib/course/getCourseCategories";
import {getCategoryIcon} from "@/lib/categories/categories-map";

interface CourseCategoriesProps {
    courseId: string
}

export async function CourseCategories(props: CourseCategoriesProps) {
    const categories = await getCourseCategories(props.courseId)

    if (categories.isError || !categories.categories) return <p>{categories.error}</p>

    return <div className={"flex gap-[10px]"}>
        {categories.categories!.map((category, index) => {
            return <div key={`course-${category.id}-${index}`}>
                {getCategoryIcon(category.name!)}
            </div>
        })}
    </div>

}