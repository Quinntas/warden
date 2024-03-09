import {CourseReview} from "@/app/course/[slug]/_components/course-review";
import {getCourseReviews} from "@/lib/course/getCourseReviews";

export async function CourseReviewsBox() {
    const reviews = await getCourseReviews("a2fb1208-ecf4-40a1-827a-d319a42408cf")

    if (reviews.isError || !reviews.reviews) return <p>{reviews.error}</p>

    return <>
        <h1 className={"text-center font-semibold text-2xl my-[20px]"}>Reviews</h1>

        <div className={"grid sm:grid-cols-2 gap-[15px] flex-col"}>
            {reviews.reviews.map((review, index) => {
                return <CourseReview
                    key={`${review.id}-${index}`}
                    count={review.rating!}
                    review={review.review!}
                />
            })}
        </div>
    </>
}