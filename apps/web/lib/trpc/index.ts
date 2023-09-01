// import Database from "better-sqlite3";
import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { todoRouter } from "./routes/todo";

export const appRouter = router({
  myTodos: todoRouter,
  getTodos: publicProcedure.query(() => {
    return [9, 9, 8];
    // return await db.select().from(todos).all();
  }),
//   getTodos: publicProcedure.query(async () => {
//     // return await db.select().from(todos).all();
//   }),
  addTodo: publicProcedure.input(z.string()).mutation(async (opts) => {
    // await db.insert(todos).values({ content: opts.input, done: 0 }).run();
    return true;
  }),
//   setDone: publicProcedure
//     .input(
//       z.object({
//         id: z.number(),
//         done: z.number(),
//       })
//     )
//     .mutation(async (opts) => {
//       await db
//         .update(todos)
//         .set({ done: opts.input.done })
//         .where(eq(todos.id, opts.input.id))
//         .run();
//       return true;
//     }),
});

export type AppRouter = typeof appRouter;