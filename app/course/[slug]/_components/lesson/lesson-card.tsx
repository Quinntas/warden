"use client"

import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {DashedButton} from "@/app/_components/course/dashed-button";
import {useRouter} from "next/navigation";

export function LessonCard() {
    const router = useRouter()

    return <Card
        className={"group cursor-pointer"}
        onClick={() => {
            router.push("/course/1/lesson/1")
        }}>
        <CardHeader>
            <CardTitle className={"flex items-center gap-[15px]"}>
                <DashedButton>
                    <span>1</span>
                </DashedButton>
                <span>Introduction</span>
            </CardTitle>
            <CardDescription>
                <span>Basic of Typescript typesystem</span>
            </CardDescription>
        </CardHeader>
    </Card>
}