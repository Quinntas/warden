import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CiLock} from "react-icons/ci";

export function Navbar() {
    const loggedIn = false;

    return <div className={"flex items-center justify-between mb-[50px]"}>
        <Link href={"/"} className={"text-4xl font-bold"}>Warden</Link>

        {loggedIn ?
            <div className={"bg-purple-500 h-[50px] w-[50px] rounded-full"}></div> :
            <Button
                variant={"outline"}
                className={"flex gap-[5px] items-center"}
            >
                <Link href={"/login"}>Login</Link>
                <CiLock size={15}/>
            </Button>
        }
    </div>
}