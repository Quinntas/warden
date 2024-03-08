import {CourseStatusBadge} from "@/app/_components/course/course-status-badge";
import {Button} from "@/components/ui/button";

export function CourseEnroll() {
    return <Button
        variant={"ghost"}
        className={"flex gap-1 font-bold items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px] px-[8px] rounded-full"}>
        <h2>ENROLL THIS COURSE FOR</h2>
        <CourseStatusBadge status={"free"}/>
    </Button>
}