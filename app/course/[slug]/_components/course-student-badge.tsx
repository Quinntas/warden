import {FaRegUser} from "react-icons/fa6";
import {Button} from "@/components/ui/button";

export function CourseStudentBadge() {
    return <Button variant={"outline"} className={"gap-2 py-2 px-4 flex items-center"}>
        <span className={"font-normal text-md"}>69</span>
        <FaRegUser size={13}/>
    </Button>
}