<script lang="ts">
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
</script>

<h2 class="text-3xl font-bold text-center mb-2 alegreya-sans">{title}</h2>
<div class="flex flex-col gap-2 w-full">
    {#each links as link, idx (idx)}
        <LinkButton icon={link.icon} link={link.url}>{link.title}</LinkButton>
    {/each}
</div>
