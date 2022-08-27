import { Board } from "@prisma/client";
import { FormattedBoard } from "../types";
import { server } from "../utils/constants";

type CreateBoard = {
  name: string;
  userId: string;
};
export const createBoard = async ({ name, userId }: CreateBoard) => {
  const response = await fetch(`${server}/api/board`, {
    method: "POST",
    body: JSON.stringify({
      data: {
        name,
        userId,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getBoard = async (boardId: string): Promise<FormattedBoard> => {
  const url = `${server}/api/boards?` + new URLSearchParams({ boardId });

  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data;
};

export const getBoards = async (): Promise<Board[]> => {
  const response = await fetch(`${server}/api/boards`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
