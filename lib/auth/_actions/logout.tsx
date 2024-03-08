"use server"

import {validateSession} from "@/lib/auth/validate-session";
import {lucia} from "@/lib/auth/lucia";
import {cookies} from "next/headers";

export const logout = async () => {
    const {session} = await validateSession();

    if (!session) return {
        success: false,
        error: "No session found"
    }

    await lucia.invalidateSession(session.id)

    const sessionCookie = lucia.createBlankSessionCookie()

    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

    return {
        success: true,
        error: undefined
    }
}