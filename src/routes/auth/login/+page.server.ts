import prisma from "$lib/server/prisma";
import { lucia } from "$lib/server/auth.js";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { Argon2id } from "oslo/password";
import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { zod4 } from "sveltekit-superforms/adapters";
import { UserLoginValidator } from "$lib/validators/user";

export const load: PageServerLoad = async (event) => {
    if (event.locals.user) {
        redirect(302, "/")
    }

    const form = await superValidate(event, zod4(UserLoginValidator))

    return { form };
}

export const actions: Actions = {
    default: async (event) => {
        let { cookies } = event;

        const form = await superValidate(event, zod4(UserLoginValidator))

        if (!form.valid) {
            return fail(400, { form })
        }

        const user = await prisma.user.findUnique({
            where: {
                username: form.data.username
            }
        })
        if (!user) {
            form.errors._errors = ['Nome de usuario ou senha incorretos']
            return fail(400, { form })
        }

        const validPassword = await new Argon2id().verify(
            user.password,
            form.data.password
        );
        if (!validPassword) {
            form.errors._errors = ['Nome de usuario ou senha incorretos']
            return fail(400, { form })
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