<script lang="ts">
    import type { ItemWithIcon } from "./types";

    let {
        item,
    }: {
        item: ItemWithIcon;
    } = $props();
</script>

<a class="w-full" href={item.url} target="_blank">
    <div role="alert" class="alert alert-outline rounded-lg p-4">
        {#if item.icon}
            <i class="fa-{item.icon.type} fa-{item.icon.name} text-2xl"></i>
        {/if}
        <span class="font-bold text-2xl lg:text-2xl alegreya-sans"
            >{item.title}</span
        >
    </div>
</a>
