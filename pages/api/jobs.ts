import { Job } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Job[] | Job | null>
) {
  const { boardId } = req.query;
  let jobs;

  if (typeof boardId === "string") {
    jobs = await prisma.job.findFirst({ where: { boardId } });
  } else {
    jobs = await prisma.job.findMany();
  }

  res.json(jobs);
}
