<script>
    import { enhance } from "$app/forms";

    let { form } = $props();
</script>

<form method="post" use:enhance>
    <fieldset
        class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
    >
        <legend class="fieldset-legend alegreya-sans font-bold text-3xl"
            >Login</legend
        >

        <label for="username" class="label text-sm mukta-vaani">Username</label>
        <input
            id="username"
            type="text"
            class="input quattrocento"
            name="username"
            placeholder="Username"
        />

        <label for="password" class="label text-sm mukta-vaani">Password</label>
        <input
            id="password"
            type="password"
            class="input quattrocento"
            name="password"
            placeholder="Password"
        />

        <button class="btn btn-neutral mt-4 text-base mukta-vaani" type="submit"
            >Login</button
        >
        {#if form?.message}
            <p class="text-error text-center">{form.message}</p>
        {/if}
    </fieldset>
</form>
