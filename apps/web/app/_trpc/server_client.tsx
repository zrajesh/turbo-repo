import { httpBatchLink } from "@trpc/client";
import { appRouter } from "../../lib/trpc";

export const serverClient = appRouter.createCaller({
    links: [
        httpBatchLink({
            url: `${process.env.NEXT_PUBLIC_DOMAIN!}/api/trpc`,
        }),
    ],
});
