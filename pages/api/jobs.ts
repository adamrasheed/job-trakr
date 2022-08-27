/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { boardId } = JSON.parse(req.body);

  const jobs = await prisma.job.findMany({ where: { boardId } });

  res.json(jobs);
}
