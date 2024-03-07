import {cn} from "@/lib/utils";

interface PageBoxProps {
    className?: string;
    children: React.ReactNode;
}

export function PageBox(props: PageBoxProps) {
    return <div
        className={cn("px-[20px] sm:px-[20%] pb-[20px] sm:pb-0 pt-[20px] flex justify-between flex-col gap-[15px] ", props.className)}>
        {props.children}
    </div>
}