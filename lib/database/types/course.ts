import {User} from "@/lib/database/types/user";
import {Review} from "@/lib/database/types/review";
import {Category} from "@/lib/database/types/category";
import {Lesson} from "@/lib/database/types/lesson";

export interface RawCourse {
    title: string;
    description: string;
    slug: string;
    id: string;
    price: number;
    teacherId: string;
    updated_at: Date;
    created_at: Date;
    enrolled: number;
}

export interface Course extends RawCourse {
    teacher: User
    reviews: Review[]
    categories: Category[]
    lessons: Lesson[]
}