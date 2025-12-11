<script lang="ts">
    import { enhance } from "$app/forms";
    import type { Snippet } from "svelte";

    let {
        children,
    }: {
        children: Snippet;
    } = $props();
</script>

<main class="w-screen h-screen flex justify-center items-center">
    <form method="post" use:enhance>
        <fieldset
            class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
            {@render children?.()}
        </fieldset>
    </form>
</main>
