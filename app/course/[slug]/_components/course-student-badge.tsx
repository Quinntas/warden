import {FaRegUser} from "react-icons/fa6";
import {Button} from "@/components/ui/button";

interface CourseStudentBadgeProps {
    count: number
}

export async function CourseStudentBadge(props: CourseStudentBadgeProps) {
    return <Button variant={"outline"} className={"gap-2 py-2 px-4 flex items-center"}>
        <span className={"font-normal text-md"}>{props.count}</span>
        <FaRegUser size={13}/>
    </Button>
}