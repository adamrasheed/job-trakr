/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { boardId } = JSON.parse(req.body);

  if (!boardId) {
    console.log("doesnt have boardId");
    const jobs = await prisma.job.findMany();

    res.json(jobs);
  } else {
    console.log("ddoes have boardId", boardId);
    const jobs = await prisma.job.findMany({ where: { boardId } });

    res.json(jobs);
  }
}
