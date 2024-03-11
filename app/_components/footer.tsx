import {Separator} from "@/components/ui/separator";
import {Linker} from "@/components/linker";

export function Footer() {
    return <footer className={"flex flex-col gap-[15px] sm:mt-[50px] mt-[20px]"}>
        <Separator/>

        <div className={"flex items-center justify-between text-[12px] text-muted-foreground px-[4px]"}>
            <Linker target={"_blank"} href={"https://twitter.com/https_quintas"} text={"@https_quintas"}/>
            <div className={"flex gap-1"}>
                <Linker href={"/terms"} text={"Terms of use"}/>
                <span>/</span>
                <Linker href={"/privacy"} text={"Privacy Policy"}/>
            </div>
        </div>
    </footer>
}