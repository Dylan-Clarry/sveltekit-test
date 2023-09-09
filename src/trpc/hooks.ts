import { t } from "$trpc/init";
import routes from "$trpc/routes";

export type Router = typeof routes;
export const handleHook = t.hookCreate(routes);
