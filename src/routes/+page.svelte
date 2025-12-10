<script lang="ts">
    import Session from "$lib/components/Session.svelte";
    import type { PageData } from "./$types";

    let {
        data,
    }: {
        data: PageData;
    } = $props();
</script>

<main class="min-h-screen p-6 flex flex-col items-center">
    <div class="w-full max-w-3xl space-y-4 flex flex-col gap-4">
        <h1 class="text-6xl font-black text-center alegreya-sans">Nahoshi</h1>

        <div class="avatar flex w-full justify-center">
            <div class="w-[60%] max-w-72 rounded-full">
                <img src="/icon.webp" alt="My icon: Nanahoshi" />
            </div>
        </div>

        <div>
            <h2 class="text-3xl font-semibold text-center mukta-vaani">
                Guilherme Nunes
            </h2>
            <p class="text-center quattrocento">
                Apenas um louco por flutter, python, svelte e tui's
            </p>
        </div>

        <div
            class="flex flex-col gap-2 mx-auto md:w-[70%] w-[95%] justify-center"
        >
            {#each data.sessions as session}
                <Session title={session.name} itens={session.itens} />
            {/each}
        </div>
    </div>
</main>
