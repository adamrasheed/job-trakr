import * as trpc from "@trpc/server";
import { TRPCError } from "@trpc/server";
import { resolve } from "path";
import { z } from "zod";
import { IBoard, IJob } from "../../../types";
import prisma from "../../backend/utils/prisma";

export const appRouter = trpc
  .router()
  .query("user", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input: { id } }) {
      const user = await prisma.user.findFirstOrThrow({ where: { id } });

      if (!user) {
        throw new Error("user not found - sorry bruh");
      }

      return user;
    },
  })
  .query("session", {
    async resolve({ ctx }) {
      const res = await fetch("/api/auth/session");
      const session = res.json();

      console.log({ WHAT: session });

      if (Object.keys(session).length) {
        console.log({ what: "yo", session });
        return session;
      }

      return null;
    },
  })
  .query("boards", {
    input: z.object({ userId: z.string() }),

    async resolve({ input: { userId } }) {
      const boards = await prisma.board.findMany({ where: { userId } });

      if (!boards) {
        throw new Error("Failed to find boards");
      }

      const formattedBoard: IBoard[] = boards.map((board) => ({
        ...board,
        createdAt: board.createdAt.toISOString(),
      }));

      return formattedBoard;
    },
  })
  .query("board", {
    input: z.object({ id: z.string() }),

    async resolve({ input: { id } }) {
      const board = await prisma.board.findFirstOrThrow({ where: { id } });

      if (!board) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      const formattedBoard: IBoard = {
        ...board,
        createdAt: board.createdAt.toISOString(),
      };

      return formattedBoard;
    },
  })
  .query("jobs", {
    input: z.object({
      boardId: z.string(),
    }),
    async resolve({ input: { boardId } }) {
      const jobs = await prisma.job.findMany();

      if (!jobs) {
        throw new TRPCError({ code: "BAD_REQUEST" });
      }

      const formattedJobs: IJob[] = jobs.map((job) => ({
        ...job,
        createdAt: job.createdAt.toISOString(),
        dateModified: job.dateModified.toISOString(),
      }));

      return formattedJobs;
    },
  })
  .mutation("board", {
    input: z.object({ name: z.string(), userId: z.string() }),

    async resolve({ input: { name, userId } }) {
      const board = await prisma.board.create({
        data: { name, userId },
      });

      if (!board) {
        throw new TRPCError({
          message: "YOU DONE MESSED UP A-A-RON",
          code: "INTERNAL_SERVER_ERROR",
          cause: "Idk",
        });
      }
    },
  })
  .mutation("job", {
    input: z.object({
      name: z.string(),
      boardId: z.string(),
      url: z.string().nullable(),
    }),
    async resolve({ input: { name, boardId, url } }) {
      const jobInDb = await prisma.job.create({ data: { name, boardId, url } });

      if (!jobInDb) {
        return { success: false, error: "No Job Found" };
      }

      const formattedJob: IJob = {
        ...jobInDb,
        createdAt: jobInDb.createdAt.toISOString(),
        dateModified: jobInDb.dateModified.toISOString(),
      };

      return { success: true, job: formattedJob };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
