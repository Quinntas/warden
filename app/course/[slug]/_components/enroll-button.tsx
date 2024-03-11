import {Button} from "@/components/ui/button";

interface EnrollButtonProps {
    children: React.ReactNode
}

export function EnrollButton(props: EnrollButtonProps) {
    return <Button
        variant={"ghost"}
        className={"flex gap-1 text-white font-bold items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[5px] px-[8px] rounded-full sm:max-w-[300px]"}>
        {props.children}
    </Button>
}

export function EnrollButtonSkeleton() {
    return <EnrollButton>
        <></>
    </EnrollButton>
}
