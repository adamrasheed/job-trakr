import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { boardId } = req.query;
  let jobs;

  if (typeof boardId === "string") {
    jobs = await prisma.job.findMany({ where: { boardId } });
  } else {
    jobs = await prisma.job.findMany();
  }

  res.json(jobs);
}
