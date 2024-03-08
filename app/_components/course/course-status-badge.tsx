import {Badge} from "@/components/ui/badge";

export function CourseStatusBadge({status}: { status: "free" | "coming-soon" | "paid" }) {
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