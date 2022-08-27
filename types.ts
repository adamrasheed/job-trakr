import { Board, Job, User } from "@prisma/client";

type FormattedCreatedAtType<D> = Omit<D, "createdAt"> & {
  createdAt: string;
};

export type FormattedUser = FormattedCreatedAtType<User>;
export type FormattedBoard = FormattedCreatedAtType<Board>;
export type FormattedJob = Omit<Job, "createdAt" | "dateModified"> & {
  createdAt: string;
  dateModified: string;
};
