import {Separator} from "@/components/ui/separator";
import Link from "next/link";

export function Footer() {
    return <footer className={"flex flex-col gap-[15px] mt-[50px]"}>
        <Separator/>

        <div className={"flex items-center justify-between text-[12px] text-muted-foreground px-[4px]"}>
            <Link href={"#"}>@http_quintas</Link>
            <div className={"flex gap-1"}>
                <Link href={"#"}>
                    <span>Terms of use</span>
                </Link>
                <span>/</span>
                <Link href={"#"}>
                    <span>Privacy Policy</span>
                </Link>
            </div>
        </div>
    </footer>
}