<script lang="ts">
    import Item from "./Item.svelte";
    import type { SessionWithItens } from "./types";

    let {
        session,
    }: {
        session: SessionWithItens;
    } = $props();
</script>

<h2 class="text-3xl font-bold text-center mb-2 alegreya-sans">
    {session.name}
</h2>
<div class="flex flex-col gap-2 w-full">
    {#each session.itens as item (item.id)}
        <Item {item} />
    {/each}
</div>
