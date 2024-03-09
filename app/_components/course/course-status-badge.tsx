import {Badge} from "@/components/ui/badge";

export function CourseStatusBadge({price}: { price: number }) {
    function getBadge(price: number) {
        switch (true) {
            case price === 0:
                return <Badge className={"bg-green-500"}>
                    <span className={"font-semibold"}>Free</span>
                </Badge>
            case price < 0:
                return <Badge className={"bg-purple-500"}>
                    <span className={"font-semibold"}>Coming Soon</span>
                </Badge>
            case price > 0:
                return <Badge>
                    <span className={"font-semibold"}>R$ 60.00</span>
                </Badge>
        }
    }

    return <>
        {getBadge(price)}
    </>
}