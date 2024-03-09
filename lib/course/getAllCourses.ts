import {cache} from "react";
import {db} from "@/lib/database/lucia-database-adapter";
import {categoryTable, courseCategoryTable, courseTable} from "@/lib/database/database-tables";
import {eq} from "drizzle-orm";

export const getAllCourses = cache(async () => {
    try {
        const courseCategoryRes = await db
            .select({
                courseId: courseTable.id,
                title: courseTable.title,
                slug: courseTable.slug,
                description: courseTable.description,
                price: courseTable.price,
                categoryId: courseCategoryTable.categoryId,
                categoryName: categoryTable.name
            })
            .from(courseTable)
            .innerJoin(courseCategoryTable, eq(courseTable.id, courseCategoryTable.courseId))
            .innerJoin(categoryTable, eq(courseCategoryTable.categoryId, categoryTable.id));

        const courseMap = new Map();

        courseCategoryRes.forEach(({courseId, title, slug, description, price, categoryId, categoryName}) => {
            if (!courseMap.has(courseId)) {
                courseMap.set(courseId, {
                    id: courseId,
                    title,
                    slug,
                    description,
                    price,
                    categories: []
                });
            }
            courseMap.get(courseId).categories.push({
                id: categoryId,
                name: categoryName
            });
        });

        const courses = [...courseMap.values() as any];

        return {
            courses: courses,
            isError: false
        }
    } catch (err: any) {
        console.log(err)
        return {
            error: err.message,
            isError: true
        }
    }
})