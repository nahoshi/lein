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

<a class="w-full" href={link}>
    <div role="alert" class="alert rounded-lg p-4">
        {#if icon}
            <i class="fa-{icon.type} fa-{icon.name} text-3xl"></i>
        {/if}
        <span class="font-semibold text-xl">{@render children?.()}</span>
    </div>
</a>
