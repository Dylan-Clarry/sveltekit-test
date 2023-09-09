import { t } from "$trpc/init";
import { z } from "zod";

export default t.router({
    welcome: t.procedure.query(({ ctx }) => {
        return `${ctx.welcome}`;
    }),
    welcomeName: t.procedure
        .input(
            z.object({
                name: z.string(),
            })
        )
        .mutation(({ ctx, input }) => {
            return `${ctx.welcome} ${input.name}`;
        }),
});
