<script lang="ts">
    import type { Snippet } from "svelte";
    import type { LinkTreeIcon } from "../../../generated/prisma/client";

    let {
        url,
        children,
        icon = null,
    }: {
        icon: LinkTreeIcon | null;
        children: Snippet;
        url: string;
    } = $props();
</script>

<a class="w-full" href={url} target="_blank">
    <div role="alert" class="alert alert-outline rounded-lg p-4">
        {#if icon}
            <i class="fa-{icon.type} fa-{icon.name} text-2xl"></i>
        {/if}
        <span class="font-bold text-2xl lg:text-2xl alegreya-sans"
            >{@render children?.()}</span
        >
    </div>
</a>
