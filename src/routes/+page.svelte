<script lang="ts">
    import { browserClient, type ProcedureReturnType } from "$trpc/browserClients";

    let welcome: ProcedureReturnType<typeof browserClient.welcome.query>;
    (async function() {
        welcome = await browserClient.welcome.query();
    })()
</script>

{#if welcome}
    {welcome}
{:else}
    loading...
{/if}
