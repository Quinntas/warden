"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {IoIosStats, IoIosTimer} from "react-icons/io";
import {IoBookOutline, IoInfinite} from "react-icons/io5";
import {FaCode} from "react-icons/fa6";

export function CourseOverviewCard() {
    return (
        <Card className={"w-full sm:w-fit"}>
            <CardHeader>
                <CardTitle><span className={"text-lg truncate"}>COURSE OVERVIEW</span></CardTitle>
            </CardHeader>
            <CardContent>
                <div className={"flex flex-col gap-[20px] font-light"}>
                    <div className={"flex gap-[10px] items-center"}>
                        <IoIosStats size={20}/>
                        <span>Zero to beginner</span>
                    </div>

                    <div className={"flex gap-[10px] items-center"}>
                        <IoBookOutline size={20}/>
                        <span>4 Lessons</span>
                    </div>

                    <div className={"flex gap-[10px] items-center"}>
                        <FaCode size={20}/>
                        <span>Hands-on exercises</span>
                    </div>

                    <div className={"flex gap-[10px] items-center"}>
                        <IoInfinite size={20}/>
                        <span>Lifetime access</span>
                    </div>

                    <div className={"flex gap-[10px] items-center truncate"}>
                        <IoIosTimer size={20}/>
                        <span>Learn at your own pace</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
