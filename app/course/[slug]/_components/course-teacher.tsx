import {Linker} from "@/components/linker";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";
import {getCourseTeacher} from "@/lib/course/getCourseTeacher";

export async function CourseTeacher() {
    const teacher = await getCourseTeacher("l9rf5ywvoxmqv7ca8ts3")

    if (teacher.isError) return <p>{teacher.error}</p>

    return <div className={"flex gap-[15px] items-center"}>
        <Avatar className="h-[40px] w-[40px] border">
            <AvatarImage src={teacher.teacher!.avatar!} alt="@avatar"/>
            <AvatarFallback>
                {teacher.teacher!.username!.split(' ')[0]}
            </AvatarFallback>
        </Avatar>

        <div className={"flex flex-col gap-1 text-[15px]"}>
            <div className={"flex gap-1"}>
                <span>Taught by</span>
                <Linker href={"#"} text={teacher.teacher!.username!} className={"font-bold text-purple-500"}/>
            </div>
            <span className={"text-muted-foreground"}>Last updated: Jan 05 2024</span>
        </div>
    </div>
}