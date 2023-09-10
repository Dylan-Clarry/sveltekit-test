<script lang="ts">
    import { browserClient, type ProcedureReturnType } from "$trpc/browserClients";

    let welcome: ProcedureReturnType<typeof browserClient.welcome.query>;
    (async function() {
        welcome = await browserClient.welcomeName.mutate({ name: "Dylan" });
    })()
</script>

{#if welcome}
    {welcome}
{:else}
    loading...
{/if}
