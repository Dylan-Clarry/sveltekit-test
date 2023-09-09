import { browserClientCreate, type ProcedureReturnType } from "@sveltering/shtz/browser";
import type { Router } from "$trpc/hooks";

export const browserClient = browserClientCreate<Router>({
    url: "http://localhost:5173/trpc",
});

export type { ProcedureReturnType };
