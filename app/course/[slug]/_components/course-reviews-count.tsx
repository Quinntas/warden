import {Button} from "@/components/ui/button";
import {CourseReviewStar} from "@/app/course/[slug]/_components/course-review-star";


export function CourseReviewsCount() {
    return <Button variant={"ghost"} className={"flex gap-2 items-center"}>
        <CourseReviewStar count={4.5}/>
        <span>4 reviews</span>
    </Button>
}