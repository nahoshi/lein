<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        children,
    }: {
        children: Snippet;
    } = $props();
</script>

<main class="w-screen h-screen flex justify-center items-center">
    {@render children?.()}
</main>
