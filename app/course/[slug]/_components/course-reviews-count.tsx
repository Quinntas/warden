import {Button} from "@/components/ui/button";
import {CourseReviewStar} from "@/app/course/[slug]/_components/course-review-star";
import {getCourseReviews} from "@/lib/course/getCourseReviews";

interface CourseReviewsCountProps {
    courseSlug: string
}

export async function CourseReviewsCount(props: CourseReviewsCountProps) {
    const reviews = await getCourseReviews(props.courseSlug)

    if (reviews.isError || !reviews.reviews) return <p>{reviews.error}</p>

    const starCount = reviews.reviews.length > 0 ?
        reviews.reviews!.map(review => review.rating!).reduce((a, b) => a + b, 0) / reviews.reviews!.length : 5

    return <Button
        variant={"outline"} className={"flex border-dashed gap-2 items-center pointer-events-none"}>
        <CourseReviewStar count={starCount}/>
        <span>{reviews.reviews!.length} reviews</span>
    </Button>
}