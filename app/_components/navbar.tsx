import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CiLock} from "react-icons/ci";
import {validateSession} from "@/lib/auth/validate-session";
import {UserNav} from "@/app/_components/user-nav";

export async function Navbar() {
    const {user} = await validateSession();

    return <div className={"flex items-center justify-between sm:mb-[20px]"}>
        <div className={"flex items-center"}>
            <Link href={"/"} className={"text-4xl font-bold group relative flex items-center"}>
            <span
                className={"hidden sm:block ease-in-out animate transition-all absolute left-[-50px] group-hover:left-[-20px] group-hover:text-purple-600"}>
                {"{"}
            </span>
                <span>warden</span>
                <span
                    className={"hidden sm:block ease-in-out animate transition-all absolute right-[-50px] group-hover:right-[-20px] group-hover:text-purple-600"}>
                {"}"}
            </span>
            </Link>
        </div>

        {user ?
            <UserNav user={user}/> :
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