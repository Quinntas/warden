import {IoStar} from "react-icons/io5";

interface CourseReviewsCountProps {
    count: number;
}

export function CourseReviewStar(props: CourseReviewsCountProps) {
    return <div className={"flex gap-2 items-center"}>
        <span>{props.count}</span>
        <IoStar color={"yellow"}/>
    </div>
}