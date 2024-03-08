"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {FaNodeJs} from "react-icons/fa6";
import {SiTypescript} from "react-icons/si";
import {cn} from "@/lib/utils";
import {CourseStatusBadge} from "@/app/_components/course/course-status-badge";
import {DashedButton} from "@/app/_components/course/dashed-button";
import {useRouter} from "next/navigation";

interface CourseCardProps {
    className?: string;
}

export function CourseCard(props: CourseCardProps) {
    const router = useRouter()

    return <Card className={cn("group w-full cursor-pointer", props.className)} onClick={() => {
        router.push("/course/1")
    }}>
        <CardHeader>
            <div className={"flex items-center justify-between"}>
                <div className={"flex gap-1"}>
                    <DashedButton>
                        <FaNodeJs size={20}/>
                    </DashedButton>
                    <DashedButton>
                        <SiTypescript size={20}/>
                    </DashedButton>
                </div>
                <CourseStatusBadge status={"free"}/>
            </div>
        </CardHeader>
        <CardContent>
            <h3 className={"text-2xl font-semibold"}>Node.js and TypeScript</h3>
            <p className={"text-sm text-muted-foreground"}>Learn how to build a REST API using Node.js and
                TypeScript</p>
        </CardContent>
    </Card>
}