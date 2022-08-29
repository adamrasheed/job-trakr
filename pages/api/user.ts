import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id: userId } = req.query;
  const id = userId as string;

  const user = await prisma.user.findFirstOrThrow({ where: { id } });

  res.json(user);
}
