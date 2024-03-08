import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {CourseReviewStar} from "@/app/course/[slug]/_components/course-review-star";

export function CourseReview() {
    return <Card>
        <CardHeader>
            <CourseReviewStar count={4.5}/>
        </CardHeader>
        <CardContent>
            <p className={"text-sm"}>Wow thats a noice class my guy, gratz</p>
        </CardContent>
    </Card>
}