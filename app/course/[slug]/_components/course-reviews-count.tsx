import {Button} from "@/components/ui/button";
import {CourseReviewStar} from "@/app/course/[slug]/_components/course-review-star";
import {getCourseReviews} from "@/lib/course/getCourseReviews";

interface CourseReviewsCountProps {
    course_id: string
}

export async function CourseReviewsCount(props: CourseReviewsCountProps) {
    const reviews = await getCourseReviews(props.course_id)

    if (reviews.isError) return <p>{reviews.error}</p>

    const starCount = reviews.reviews!.map(review => review.rating!).reduce((a, b) => a + b, 0) / reviews.reviews!.length

    return <Button
        variant={"ghost"} className={"flex gap-2 items-center"}>
        <CourseReviewStar count={starCount}/>
        <span>{reviews.reviews!.length} reviews</span>
    </Button>
}