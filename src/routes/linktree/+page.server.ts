import Prisma from "$lib/server/prisma"

export const load = async () => {
    let sessions = await Prisma.linkTreeSession.findMany({
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