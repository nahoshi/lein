import prisma from '$lib/server/prisma';
import { generateId } from 'lucia';
import { Argon2id } from "oslo/password";
import { lucia } from '$lib/server/auth.js';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { UserSinginValidator } from '$lib/validators/user.js';


export const load: PageServerLoad = async (event) => {
    if (event.locals.user) {
        redirect(302, "/")
    }

    const form = await superValidate(event, zod4(UserSinginValidator))

    return { form };
}

export const actions = {
    default: async (event) => {
        let { cookies } = event;

        const form = await superValidate(event, zod4(UserSinginValidator))

        if (!form.valid) {
            return fail(400, { form })
        }

        const user = await prisma.user.findUnique({
            where: {
                username: form.data.username
            }
        })
        if (user) {
            form.errors.username = ['Username já existente']
            return fail(400, { form })
        }

        const userId = generateId(15)
        const hashedPassword = await new Argon2id().hash(form.data.password)
        const newUser = await prisma.user.create({
            data: {
                id: userId,
                username: form.data.username,
                password: hashedPassword
            }
        })
        const session = await lucia.createSession(newUser.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
        redirect(302, "/");
    }
};