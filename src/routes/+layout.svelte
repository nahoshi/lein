<script lang="ts">
    import "./layout.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<main class="min-h-screen p-6 flex flex-col items-center">
    <div class="w-full max-w-3xl space-y-4 flex flex-col gap-4">
        {@render children()}
    </div>
</main>
