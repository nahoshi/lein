<script lang="ts">
    import type { Prisma } from "../../generated/prisma/client";
    import SessionItem from "./SessionItem.svelte";

    type ItemWithIcon = Prisma.LinkTreeItemGetPayload<{
        include: {
            icon: true;
        };
    }>;

    let {
        title,
        itens,
    }: {
        title: string;
        itens: Array<ItemWithIcon>;
    } = $props();
</script>

<h2 class="text-3xl font-bold text-center mb-2 alegreya-sans">{title}</h2>
<div class="flex flex-col gap-2 w-full">
    {#each itens as item, idx (idx)}
        <SessionItem icon={item.icon} url={item.url}>{item.title}</SessionItem>
    {/each}
</div>
