import {getCategoryIcon} from "@/lib/categories/categories-map";
import {Category} from "@/lib/database/types/category";

interface CourseCategoriesProps {
    categories: Category[]
}

export async function CourseCategories(props: CourseCategoriesProps) {
    return <div className={"flex gap-[10px]"}>
        {props.categories!.map((category, index) => {
            return <div key={`course-${category.id}-${index}`}>
                {getCategoryIcon(category.name!)}
            </div>
        })}
    </div>

}