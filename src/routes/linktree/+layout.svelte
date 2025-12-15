<script lang="ts">
    import type { Snippet } from "svelte";

    const {
        children,
    }: {
        children: Snippet;
    } = $props();
</script>

<main class="min-h-screen p-6 flex flex-col items-center">
    <div class="w-full max-w-3xl space-y-4 flex flex-col gap-4">
        {@render children?.()}
    </div>
</main>
