<script lang="ts">
    let {
        title,
        name,
        type = "text",
        placeholder = "",
        value = $bindable(),
        errors = undefined,
    }: {
        title: string;
        name: string;
        value: any;
        type?: string;
        errors?: Array<string>;
        placeholder: string;
    } = $props();
</script>

<label for={name} class="label text-sm mukta-vaani">{title}</label>
<input
    id={name}
    {type}
    class="input quattrocento {errors ? 'input-error' : ''}"
    bind:value
    {name}
    {placeholder}
/>
{#if errors}
    {#each errors as error}
        <p class="label text-error text-wrap">
            {error}
        </p>
    {/each}
{/if}
