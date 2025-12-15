<script lang="ts">
    import { superForm } from "sveltekit-superforms";
    import type { PageData } from "./$types";
    import Input from "$lib/components/Input.svelte";

    let { data }: { data: PageData } = $props();

    const { form, errors } = $derived(superForm(data.form));
</script>

<legend class="fieldset-legend alegreya-sans font-bold text-3xl"
    >Registrar</legend
>

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
<Input
    title="Chave de registro"
    name="key"
    placeholder="Chave de registro"
    bind:value={$form.key}
    errors={$errors.key}
/>

<button class="btn btn-neutral mt-4 text-base mukta-vaani" type="submit">
    Login
</button>
