"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {CourseStatusBadge} from "@/app/_components/course/course-status-badge";
import {DashedButton} from "@/app/_components/course/dashed-button";
import {useRouter} from "next/navigation";
import {getCategoryIcon} from "@/lib/categories/categories-map";

interface CourseCardProps {
    className?: string;
    price: number
    title: string
    description: string
    categories: { id: string, name: string }[]
    slug: string
}

export function CourseCard(props: CourseCardProps) {
    const router = useRouter()

    return <Card className={cn("group w-full cursor-pointer bg-grid-default", props.className)} onClick={() => {
        router.push(`/course/${props.slug}`)
    }}>
        <CardHeader>
            <div className={"flex items-center justify-between"}>
                <div className={"flex gap-1"}>
                    {props.categories.map((category, index) => {
                        return <DashedButton key={`${category.id}-${index}`}>
                            {getCategoryIcon(category.name)}
                        </DashedButton>
                    })}
                </div>
                <CourseStatusBadge status={"free"}/>
            </div>
        </CardHeader>
        <CardContent>
            <h3 className={"text-2xl font-semibold"}>{props.title}</h3>
            <p className={"text-sm text-muted-foreground"}>{props.description}</p>
        </CardContent>
    </Card>
}