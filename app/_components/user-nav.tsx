"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Cloud, LifeBuoy, LogOut} from "lucide-react";
import {useTheme} from "next-themes";
import Link from "next/link";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {DatabaseUserAttributes} from "@/lib/auth/lucia";
import React from "react";
import {logout} from "@/lib/auth/_actions/logout";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

interface UserNavProps {
    user: DatabaseUserAttributes
}

export function UserNav(props: UserNavProps) {
    const themeState = useTheme()
    const router = useRouter()

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
                variant="ghost"
                size={"icon"}
                className="flex items-center ">
                <Avatar className="h-[40px] w-[40px] border">
                    <AvatarImage src={props.user.avatar} alt="@avatar"/>
                    <AvatarFallback>
                        {props.user.username.split(' ')[0]}
                    </AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => {
                    themeState.setTheme(themeState.theme === "light" ? "dark" : "light")
                }}>
                    <SunIcon
                        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2 h-4 w-4"/>
                    <MoonIcon
                        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2 h-4 w-4"/>
                    <span>{themeState.theme === "light" ? "Light mode" : "Dark mode"}</span>
                    <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
                <Link
                    href={"https://api.whatsapp.com/send/?phone=5596984112103"}
                    className={"flex items-center"} target={"_blank"}>
                    <LifeBuoy className="mr-2 h-4 w-4"/>
                    <span>Support</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
                <Cloud className="mr-2 h-4 w-4"/>
                <span>API</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem className={"cursor-pointer"} onClick={() => {
                return logout().then((res) => {
                    if (res.error) {
                        toast(res.error)
                    } else {
                        router.refresh()
                        toast("Logged out")
                    }
                })
            }}>
                <LogOut className="mr-2 h-4 w-4"/>
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}