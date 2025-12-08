<script lang="ts">
    import { Icon } from "$lib/icon.svelte";
    import type {
        Prisma,
        Icon as IcomModel,
    } from "../../generated/prisma/client";
    import LinkButton from "./LinkButton.svelte";

    type LinkWithIcon = Prisma.LinkGetPayload<{
        include: {
            icon: true;
        };
    }>;

    let {
        title,
        links,
    }: {
        title: string;
        links: Array<LinkWithIcon>;
    } = $props();

    const _links = Array.from(
        { length: Math.ceil(links.length / 2) },
        (_, index) => links.slice(index * 2, index * 2 + 2),
    );
</script>

<h2 class="text-2xl font-bold text-center mb-2">{title}</h2>
{#each _links as twoLinks, idx (idx)}
    <div class="flex gap-2 mx-auto w-full">
        {#each twoLinks as link}
            <LinkButton icon={link.icon} link={link.url}
                >{link.title}</LinkButton
            >
        {/each}
    </div>
{/each}
