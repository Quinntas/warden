"use client"

import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {DashedButton} from "@/app/_components/course/dashed-button";
import {useRouter} from "next/navigation";

interface LessonCardProps {
    title: string
    description: string
    order: number
    id: string
    courseSlug: string
}

export function LessonCard(props: LessonCardProps) {
    const router = useRouter()

    return <Card
        className={"group cursor-pointer bg-grid-default"}
        onClick={() => {
            router.push(`/course/${props.courseSlug}/lesson/${props.id}`)
        }}>
        <CardHeader>
            <CardTitle className={"flex items-center gap-[15px]"}>
                <DashedButton>
                    <span>{props.order}</span>
                </DashedButton>
                <span>{props.title}</span>
            </CardTitle>
            <CardDescription>
                <span className={"line-clamp-1"}>{props.description}</span>
            </CardDescription>
        </CardHeader>
    </Card>
}