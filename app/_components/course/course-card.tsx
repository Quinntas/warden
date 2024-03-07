import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {ReactNode} from "react";
import {FaNodeJs} from "react-icons/fa6";
import {SiTypescript} from "react-icons/si";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

function TechnologyIcon({icon}: { icon: ReactNode }) {
    return <Button variant={"outline"}
                   disabled={true}
                   size={"icon"}
                   className={"opacity-30 group-hover:border-white ease-in-out transition-all border-dashed group-hover:opacity-100"}>
        {icon}
    </Button>
}


function StatusBadge({status}: { status: "free" | "coming-soon" | "paid" }) {
    function getBadge() {
        switch (status) {
            case "free":
                return <Badge className={"bg-green-500"}>
                    <span className={"font-semibold"}>Free</span>
                </Badge>
            case "coming-soon":
                return <Badge className={"bg-purple-500"}>
                    <span className={"font-semibold"}>Coming Soon</span>
                </Badge>
            case "paid":
                return <Badge>
                    <span className={"font-semibold"}>R$ 60.00</span>
                </Badge>
        }
    }

    return <>
        {getBadge()}
    </>
}

interface CourseCardProps {
    className?: string;
}

export function CourseCard(props: CourseCardProps) {
    return <Card className={cn("group shadow w-full", props.className)}>
        <CardHeader>
            <div className={"flex items-center justify-between"}>
                <div className={"flex gap-1"}>
                    <TechnologyIcon icon={<FaNodeJs size={20}/>}/>
                    <TechnologyIcon icon={<SiTypescript size={20}/>}/>
                </div>
                <StatusBadge status={"free"}/>
            </div>
        </CardHeader>
        <CardContent>
            <h3 className={"text-2xl font-semibold"}>Node.js and TypeScript</h3>
            <p className={"text-sm text-muted-foreground"}>Learn how to build a REST API using Node.js and
                TypeScript</p>
        </CardContent>
    </Card>
}