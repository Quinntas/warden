import {Button} from "@/components/ui/button";
import {CourseReviewStar} from "@/app/course/[slug]/_components/course-review-star";
import {getCourseReviews} from "@/lib/course/getCourseReviews";

export async function CourseReviewsCount() {
    const reviews = await getCourseReviews("a2fb1208-ecf4-40a1-827a-d319a42408cf")

    if (reviews.isError) return <p>{reviews.error}</p>

    const starCount = reviews.reviews!.map(review => review.rating!).reduce((a, b) => a + b, 0) / reviews.reviews!.length

    return <Button
        variant={"ghost"} className={"flex gap-2 items-center"}>
        <CourseReviewStar count={starCount}/>
        <span>{reviews.reviews!.length} reviews</span>
    </Button>
}