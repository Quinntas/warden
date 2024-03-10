import {CourseReview} from "@/app/course/[slug]/_components/course-review";
import {Review} from "@/lib/database/types/review";

interface CourseReviewsBoxProps {
    reviews: Review[]
}

export async function CourseReviewsBox(props: CourseReviewsBoxProps) {
    return <>
        <h1 className={"text-center font-semibold text-2xl my-[20px]"}>Reviews</h1>

        <div className={"grid sm:grid-cols-2 gap-[15px] flex-col"}>
            {props.reviews.length > 0 ?
                props.reviews.map((review, index) => {
                    return <CourseReview
                        key={`course-review-${review.id}-${index}`}
                        count={review.rating!}
                        review={review.review!}
                    />
                }) :
                <span className={"text-xl"}>No reviews found</span>
            }
        </div>
    </>
}