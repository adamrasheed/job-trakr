import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST method accepted" });
  }

  console.log("creating job");

  const { data } = JSON.parse(req.body);

  const job = await prisma.job.create({
    data,
  });

  res.json(job);
}
