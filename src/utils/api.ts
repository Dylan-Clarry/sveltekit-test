import type { createTRPCClient, TRPCClientInit } from "trpc-sveltekit";

import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "../server/api/root";
import type { Router } from "../server/api/trpc";

let browserClient: ReturnType<typeof createTRPCClient<Router>>;

// Inference helper for inputs
export type RouterInputs = inferRouterInputs<AppRouter>;

// Inference helper for outputs
export type RouterOutputs = inferRouterOutputs<AppRouter>;
