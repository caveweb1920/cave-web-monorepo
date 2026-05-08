import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const postRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  }),
  create: publicProcedure
    .input(z.object({ title: z.string().min(1), content: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.post.create({ data: input });
    }),
});
