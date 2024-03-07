import Link from "next/link";
import {Button} from "@/components/ui/button";
import {FaLock} from "react-icons/fa6";

export function Navbar() {
    const loggedIn = false;

    return <div className={"flex items-center justify-between"}>
        <Link href={"/"} className={"text-4xl font-bold"}>Warden</Link>

        {loggedIn ?
            <div className={"bg-purple-500 h-[50px] w-[50px] rounded-full"}></div> :
            <Button
                variant={"outline"}
                className={"flex gap-1 items-center"}
            >
                <FaLock size={12}/>
                <Link href={"#"}>SignIn</Link>
            </Button>
        }
    </div>
}