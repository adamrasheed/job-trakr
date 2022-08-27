/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST method accepted" });
  }

  const { data } = JSON.parse(req.body);

  const board = await prisma.board.create({
    data,
  });

  res.json(board);
}
