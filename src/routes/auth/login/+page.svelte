<script lang="ts">
    import { superForm } from "sveltekit-superforms";
    import type { PageData } from "./$types";
    import Input from "$lib/components/Input.svelte";

    let { data }: { data: PageData } = $props();

    const { form, errors } = $derived(superForm(data.form));
</script>

<legend class="fieldset-legend alegreya-sans font-bold text-3xl">Login</legend>

<Input
    title="Username"
    name="username"
    placeholder="Nome de usuario"
    bind:value={$form.username}
    errors={$errors.username}
/>
<Input
    title="Senha"
    name="password"
    placeholder="Senha"
    type="password"
    bind:value={$form.password}
    errors={$errors.password}
/>

<button class="btn btn-neutral mt-4 text-base mukta-vaani" type="submit">
    Login
</button>

{#if $errors._errors}
    {#each $errors._errors as error}
        <p class="text-error text-center">
            {error}
        </p>
    {/each}
{/if}
