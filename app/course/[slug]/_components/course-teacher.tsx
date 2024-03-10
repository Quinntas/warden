import {Linker} from "@/components/linker";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from "react";
import {dateToDDMMYYYY} from "@/lib/utils";
import {User} from "@/lib/database/types/user";

interface CourseTeacherProps {
    updated_at: Date
    teacher: User
}

export async function CourseTeacher(props: CourseTeacherProps) {

    return <div className={"flex gap-[15px] items-center"}>
        <Avatar className="h-[40px] w-[40px] border">
            <AvatarImage src={props.teacher!.avatar!} alt="@avatar"/>
            <AvatarFallback>
                {props.teacher!.username!.split(' ')[0]}
            </AvatarFallback>
        </Avatar>

        <div className={"flex flex-col gap-1 text-[15px]"}>
            <div className={"flex gap-1"}>
                <span>Taught by</span>
                <Linker href={"#"} text={props.teacher!.username!} className={"font-bold text-purple-500"}/>
            </div>
            <span className={"text-muted-foreground"}>Last updated: {dateToDDMMYYYY(props.updated_at)}</span>
        </div>
    </div>
}