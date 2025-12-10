import prisma from "$lib/server/prisma";
import { lucia } from "$lib/server/auth.js";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { Argon2id } from "oslo/password";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ locals }) => {
    if (locals.user) {
        redirect(302, "/")
    }
}

export const actions: Actions = {
    default: async ({ request, cookies }) => {
        const { username, password } = Object.fromEntries(await request.formData()) as Record<string, string>
        if (!username || !password) {
            return fail(400, { message: "Username and password are required" });
        }

        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })
        if (!user) {
            return fail(400, { message: "Incorrect username or password" })
        }

        const validPassword = await new Argon2id().verify(user.password, password);
        if (!validPassword) {
            return fail(400, { message: "Incorrect username or password" })
        }

        const session = await lucia.createSession(user.id, [])
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        })
        redirect(302, "/")
    }
};