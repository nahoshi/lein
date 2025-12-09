<script lang="ts">
    import type { Snippet } from "svelte";
    import type { Icon } from "../../generated/prisma/client";

    let {
        link,
        children,
        icon = null,
    }: {
        icon: Icon | null;
        children: Snippet;
        link: string;
    } = $props();
</script>

<a class="w-full" href={link} target="_blank">
    <div role="alert" class="alert rounded-lg p-4">
        {#if icon}
            <i class="fa-{icon.type} fa-{icon.name} text-2xl"></i>
        {/if}
        <span class="font-bold text-2xl lg:text-2xl alegreya-sans"
            >{@render children?.()}</span
        >
    </div>
</a>
