import {Button} from "@/components/ui/button";
import {FaFire, FaLock, FaLockOpen} from "react-icons/fa6";

interface LessonNavItemProps {
    isLocked: boolean;
    title: string;
    isCurrent: boolean;
}

function LessonNavItem(props: LessonNavItemProps) {
    return <Button variant={"ghost"} className={"w-full flex gap-2 items-center justify-between"}>
        <div className={"flex gap-2 items-center"}>
            {props.isLocked ? <FaLock size={16}/> : <FaLockOpen size={16}/>}
            <span className={"font-[500px] text-lg"}>{props.title}</span>
        </div>
        {props.isCurrent && <FaFire size={18} color={"yellow"}/>}
    </Button>
}

interface LessonNavProps {
}

export function LessonNav(props: LessonNavProps) {
    return <div className={"flex flex-col gap-1"}>
        <h2>Next lessons</h2>
        <div className={"grid grid-cols-1 gap-[15px]"}>
            <LessonNavItem title={"1. Introduction"} isLocked={false} isCurrent={true}/>
            <LessonNavItem title={"2. Introduction"} isLocked={true} isCurrent={false}/>
            <LessonNavItem title={"3. Introduction"} isLocked={true} isCurrent={false}/>
            <LessonNavItem title={"4. Introduction"} isLocked={true} isCurrent={false}/>
        </div>
    </div>
}