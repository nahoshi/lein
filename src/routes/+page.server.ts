import prisma from "../lib/server/prisma"

export const load = async () => {
    let sessions = await prisma.linkTreeSession.findMany({
        include: {
            itens: {
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