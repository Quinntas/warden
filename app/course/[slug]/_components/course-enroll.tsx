import {CourseStatusBadge} from "@/app/_components/course/course-status-badge";
import {Button} from "@/components/ui/button";

interface CourseEnrollProps {
    price: number
    isEnrolled: boolean
}

export async function CourseEnroll(props: CourseEnrollProps) {
    return <>
        {props.isEnrolled ?
            <Button
                variant={"ghost"}
                className={"flex gap-1 font-bold items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px] px-[8px] rounded-full sm:max-w-[300px]"}>
                <h2>You already are enrolled</h2>
            </Button> :
            <Button
                variant={"ghost"}
                className={"flex gap-1 font-bold items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px] px-[8px] rounded-full sm:max-w-[300px]"}>
                <h2>ENROLL THIS COURSE FOR</h2>
                <CourseStatusBadge price={props.price}/>
            </Button>
        }
    </>
}