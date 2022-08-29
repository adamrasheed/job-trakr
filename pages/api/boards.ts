import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";
import { IBoard } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): IBoard[] {
  const { boardId } = req.query;
  let boards;

  if (typeof boardId === "string") {
    boards = await prisma.board.findFirstOrThrow({ where: { id: boardId } });
  } else {
    boards = await prisma.board.findMany();
  }

  res.json(boards);
}
