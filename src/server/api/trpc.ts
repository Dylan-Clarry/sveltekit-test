import type { RequestEvent } from "@sveltejs/kit";
import type { inferAsyncReturnType } from "@trpc/server";

export async function createContext(event: RequestEvent) {
    return {
        // Context information
    };
}
export type Context = inferAsyncReturnType<typeof createContext>;

import { initTRPC } from "@trpc/server";

export const t = initTRPC.context<Context>().create();
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
export type Router = typeof t.router;

/** Reusable middleware that enforces users are logged in before running the procedure. */
// const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
//   if (!ctx.session || !ctx.session.user) {
//     throw new TRPCError({ code: "UNAUTHORIZED" });
//   }
//   return next({
//     ctx: {
//       // infers the `session` as non-nullable
//       session: { ...ctx.session, user: ctx.session.user },
//     },
//   });
// });
// 
// /**
//  * Protected (authenticated) procedure
//  *
//  * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies
//  * the session is valid and guarantees `ctx.session.user` is not null.
//  *
//  * @see https://trpc.io/docs/procedures
//  */
// export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
