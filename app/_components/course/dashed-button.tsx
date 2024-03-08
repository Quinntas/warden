import {ReactNode} from "react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

interface TechnologyIconProps {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}

export function DashedButton(props: TechnologyIconProps) {
    return <Button variant={"outline"}
                   disabled={props.disabled != undefined ? props.disabled : true}
                   size={"icon"}
                   className={cn("opacity-30 group-hover:border-white ease-in-out transition-all border-dashed group-hover:opacity-100", props.className)}>
        {props.children}
    </Button>
}