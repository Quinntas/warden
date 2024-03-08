"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useState} from "react";
import {cn} from "@/lib/utils";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Github} from "lucide-react";
import Link from "next/link";

export function LoginForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [emailExists, setEmailExists] = useState<boolean>(false)

    async function onSubmitEmail(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setEmailExists(true)
        }, 3000)
    }

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return <Card>
        <CardHeader>
            <CardTitle>
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Login to your account
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email below to login
                    </p>
                </div>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className={cn("grid gap-6")}>
                <form onSubmit={(e) => {
                    emailExists ? onSubmit(e) : onSubmitEmail(e)
                }}>
                    <div className="grid gap-[15px]">
                        <div className="grid gap-[15px]">
                            <Label className="sr-only" htmlFor="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                disabled={isLoading}
                            />
                            {emailExists && <>
                                <Label className="sr-only" htmlFor="password">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="*******"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete="password"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </>}
                        </div>
                        <Button disabled={isLoading}>
                            {isLoading && (
                                <div className={"w-[30px] h-[30px]"}>
                                    <p>Loading</p>
                                </div>
                            )}
                            Sign In with Email
                        </Button>
                    </div>
                </form>
                <div className={"flex items-center gap-1 justify-between text-sm"}>
                    <span>Dont have a account?</span>
                    <Link href={"/signup"} className={"font-semibold"}>Create one</Link>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t"/>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
                    </div>
                </div>
                <Button
                    variant="outline" type="button" disabled={isLoading}>
                    {isLoading ? (
                        <div className={"w-[30px] h-[30px]"}>
                            <p>Loading</p>
                        </div>
                    ) : (
                        <Github/>
                    )}{" "}
                    Github
                </Button>
            </div>

        </CardContent>
    </Card>
}