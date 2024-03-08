"use server"

import {z} from "zod";
import {loginSchema} from "@/lib/types/zod/login-schema";
import {db} from "@/lib/database/lucia-database-adapter";
import {eq} from "drizzle-orm";
import {Argon2id} from "oslo/password";
import {lucia} from "@/lib/auth/lucia";
import {cookies} from "next/headers";

export const login = async (values: z.infer<typeof loginSchema>) => {
    const res = await db.query.userTable.findFirst({
        where: (table) => eq(table.email, values.email)
    })

    if (!res)
        return {
            success: false,
            error: "User not found"
        }

    const isValidPassword = await new Argon2id().verify(
        res.hashed_password,
        values.password
    )

    if (!isValidPassword)
        return {
            success: false,
            error: "Incorrect email or password"
        }

    const session = await lucia.createSession(res.id, {
        expiresIn: 60 * 60 * 24 * 30
    })

    const sessionCookie = lucia.createSessionCookie(session.id)

    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

    return {
        success: true,
        error: undefined
    }
}