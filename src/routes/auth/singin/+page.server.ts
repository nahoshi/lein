import prisma from '$lib/server/prisma';
import { generateId } from 'lucia';
import { Argon2id } from "oslo/password";
import { lucia } from '$lib/server/auth.js';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
    if (locals.user) {
        redirect(302, "/")
    }
}

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const { username, password, key } = Object.fromEntries(data) as Record<string, string>
        if (!username || !password || !key) {
            return fail(400, { message: "Nome de usuario, Senha e Chave de registro, são requeridas." });
        }

        if (key != `${process.env.REGISTER_KEY}`) {
            return fail(400, { message: "Chave de registro está incorreta." })
        }

        const userId = generateId(15)
        const hashedPassword = await new Argon2id().hash(password)
        const user = await prisma.user.create({
            data: {
                id: userId,
                username: username,
                password: hashedPassword
            }
        })
        const session = await lucia.createSession(user.id, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies.set(sessionCookie.name, sessionCookie.value, {
            path: ".",
            ...sessionCookie.attributes
        });
        redirect(302, "/");
    }
};