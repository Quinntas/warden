"use server"

import {z} from "zod";
import {signupSchema} from "@/lib/types/zod/signup-schema";
import {Argon2id} from "oslo/password";
import {generateId} from "lucia";
import {db} from "@/lib/database/lucia-database-adapter";
import {userTable} from "@/lib/database/database-tables";
import {lucia} from "@/lib/auth/lucia";
import {cookies} from "next/headers";

export const signUp = async (values: z.infer<typeof signupSchema>) => {
    const hashed_password = await new Argon2id().hash(values.password)
    const userId = generateId(20)

    try {
        await db.insert(userTable).values({
            id: userId,
            avatar: "https://i.imgur.com/WxNkK7J_d.webp?maxwidth=760&fidelity=grand",
            username: values.username,
            email: values.email,
            hashed_password: hashed_password,
            created_at: new Date(),
            updated_at: new Date()
        })
    } catch (e: any) {
        return {
            success: false,
            error: e?.message
        }
    }

    const session = await lucia.createSession(userId, {
        expiresIn: 60 * 60 * 24 * 30
    })

    const sessionCookie = lucia.createSessionCookie(session.id)

    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

    return {
        success: true,
        data: {
            userId: userId
        }
    }
}