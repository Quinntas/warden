import Link from "next/link";
import {Button} from "@/components/ui/button";
import {CiLock} from "react-icons/ci";
import {validateSession} from "@/lib/auth/validate-session";
import {UserNav} from "@/app/_components/user-nav";

export async function Navbar() {
    const {user} = await validateSession();

    return <div className={"flex items-center justify-between mb-[20px]"}>
        <Link href={"/"} className={"text-4xl font-bold"}>Warden</Link>

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