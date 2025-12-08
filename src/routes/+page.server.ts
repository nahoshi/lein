import prisma from "../lib/server/prisma"

export const load = async () => {
    let sessions = await prisma.session.findMany({
        include: {
            links: {
                include: {
                    icon: true
                }
            }
        }
    })

    return {
        sessions
    }
}