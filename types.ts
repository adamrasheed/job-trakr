import { Board, Job, User } from "@prisma/client";

type FormattedCreatedAtType<D> = Omit<D, "createdAt"> & {
  createdAt: string;
};

export type IUser = FormattedCreatedAtType<User>;
export type IBoard = FormattedCreatedAtType<Board>;
export type IJob = Omit<Job, "createdAt" | "dateModified"> & {
  createdAt: string;
  dateModified: string;
};

export interface DefaultSession extends Record<string, unknown> {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  expires?: string;
}
