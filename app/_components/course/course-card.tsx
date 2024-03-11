"use client"

import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {CourseStatusBadge} from "@/app/_components/course/course-status-badge";
import {DashedButton} from "@/app/_components/course/dashed-button";
import {useRouter} from "next/navigation";
import {getCategoryIcon} from "@/lib/categories/categories-map";
import {BackgroundGradient} from "@/components/background-gradient";

interface CourseCardProps {
    className?: string;
    containerClassName?: string;
    price: number
    title: string
    description: string
    categories: { id: string, name: string }[]
    slug: string
}

export function CourseCard(props: CourseCardProps) {
    const router = useRouter()

    return <BackgroundGradient
        containerClassName={cn("w-full ", props.containerClassName)}
        className={"w-full"}>
        <Card className={cn("group cursor-pointer w-full ", props.className)} onClick={() => {
            router.push(`/course/${props.slug}`)
        }}>
            <CardHeader>
                <div className={"flex items-center justify-between"}>
                    <div className={"flex gap-1"}>
                        {props.categories.map((category, index) => {
                            return <DashedButton key={`course-card-btn-${category.id}-${index}`}>
                                {getCategoryIcon(category.name)}
                            </DashedButton>
                        })}
                    </div>
                    <CourseStatusBadge price={props.price}/>
                </div>
            </CardHeader>
            <CardContent>
                <h3 className={"text-2xl font-semibold"}>{props.title}</h3>
                <p className={"text-sm text-muted-foreground"}>{props.description}</p>
            </CardContent>
        </Card>
    </BackgroundGradient>
}