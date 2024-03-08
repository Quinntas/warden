import {Linker} from "@/components/linker";

export function CourseTeacher() {
    return <div className={"flex gap-[15px] items-center"}>
        <div className={"bg-purple-500 h-[50px] w-[50px] rounded-full"}></div>

        <div className={"flex flex-col gap-1 text-[15px]"}>
            <div className={"flex gap-1"}>
                <span>Taught by</span>
                <Linker href={"#"} text={"Caio Quintas"} className={"font-bold text-purple-500"}/>
            </div>
            <span className={"text-muted-foreground"}>Last updated: Jan 05 2024</span>
        </div>
    </div>
}