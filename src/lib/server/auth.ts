import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import Prisma from "./prisma"
import { Lucia } from "lucia";
import { dev } from "$app/environment";


const adapter = new PrismaAdapter(Prisma.session, Prisma.user)
export const lucia = new Lucia(adapter, {
    sessionCookie: {
        attributes: {
            secure: !dev
        },
    },
    getUserAttributes: (attributes) => {
        return {
            username: attributes.username
        }
    }
})

declare module "lucia" {
    interface Register {
        Lucia: typeof lucia;
        DatabaseUserAttributes: DatabaseUserAttributes
    }

    interface DatabaseUserAttributes {
        username: string
    }
}