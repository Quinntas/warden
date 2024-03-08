export function CourseTeacher() {
    return <div className={"flex gap-[15px] items-center"}>
        <div className={"bg-purple-500 h-[50px] w-[50px] rounded-full"}></div>

        <div className={"flex flex-col gap-1 text-[15px]"}>
            <span>Taught by <span className={"font-bold text-purple-500"}>Caio quintas</span></span>
            <span className={"text-muted-foreground"}>Last updated: Jan 05 2024</span>
        </div>
    </div>
}