import {CourseReview} from "@/app/course/[slug]/_components/course-review";
import {getCourseReviews} from "@/lib/course/getCourseReviews";

interface CourseReviewsBoxProps {
    courseSlug: string
}

export async function CourseReviewsBox(props: CourseReviewsBoxProps) {
    const reviews = await getCourseReviews(props.courseSlug)

    if (reviews.isError || !reviews.reviews || reviews.reviews.length === 0)
        return <></>

    return <>
        <h1 className={"text-center font-semibold text-2xl my-[20px]"}>Reviews</h1>

        <div className={"grid sm:grid-cols-2 gap-[15px] flex-col"}>
            {reviews.reviews.length > 0 ?
                reviews.reviews.map((review, index) => {
                    return <CourseReview
                        key={`${review.id}-${index}`}
                        count={review.rating!}
                        review={review.review!}
                    />
                }) :
                <span className={"text-xl"}>No reviews found</span>
            }
        </div>
    </>
}