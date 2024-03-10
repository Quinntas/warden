import {Button} from "@/components/ui/button";
import {CourseReviewStar} from "@/app/course/[slug]/_components/course-review-star";
import {Review} from "@/lib/database/types/review";

interface CourseReviewsCountProps {
    reviews: Review[]
}

export async function CourseReviewsCount(props: CourseReviewsCountProps) {
    const starCount = props.reviews.length > 0 ?
        props.reviews!.map(review => review.rating!).reduce((a, b) => a + b, 0) / props.reviews!.length : 5

    return <Button
        variant={"outline"} className={"flex border-dashed gap-2 items-center pointer-events-none"}>
        <CourseReviewStar count={starCount}/>
        <span>{props.reviews!.length} reviews</span>
    </Button>
}