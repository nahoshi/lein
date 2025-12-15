import type { Prisma } from "../../../generated/prisma/client";

export type ItemWithIcon = Prisma.LinkTreeItemGetPayload<{
    include: {
        icon: true;
    };
}>;

export type SessionWithItens = Prisma.LinkTreeSessionGetPayload<{
    include: {
        itens: {
            include: {
                icon: true
            }
        };
    },
}>