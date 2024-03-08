import {CourseReview} from "@/app/course/[slug]/_components/course-review";

export function CourseReviewsBox() {
    return <>
        <h1 className={"text-center font-semibold text-2xl my-[20px]"}>Reviews</h1>

        <div className={"flex gap-[15px] flex-col"}>
            <CourseReview/>
            <CourseReview/>
            <CourseReview/>
            <CourseReview/>
            <CourseReview/>
        </div>
    </>
}