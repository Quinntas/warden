import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {CourseReviewStar} from "@/app/course/[slug]/_components/course-review-star";

interface CourseReviewProps {
    count: number
    review: string
}

export function CourseReview(props: CourseReviewProps) {
    return <Card className={"w-full"}>
        <CardHeader>
            <CourseReviewStar count={props.count}/>
        </CardHeader>
        <CardContent>
            <p className={"text-sm"}>{props.review}</p>
        </CardContent>
    </Card>
}