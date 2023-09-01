// import Database from "better-sqlite3";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const todoRouter = router({
  allTodos: publicProcedure.query(() => {
    return [{id: 1, text: "Go To Gym"}];
  }),
});
