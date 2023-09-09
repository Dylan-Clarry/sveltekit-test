import { TRPC } from "@sveltering/shtz/server";

export const t = new TRPC({
    path: "/trpc",
    context: async function(e) {
        return {
            welcome: "Hello and welcome",
        };
    }
});
