import { handleHook } from "$trpc/hooks";

export async function handle({ event, resolve }: { event: any, resolve: any }) {
    const TRPCResponse = await handleHook(event);
    if(TRPCResponse) {
        return TRPCResponse;
    }
    const response = await resolve(event);
    return response;
}
