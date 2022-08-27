import { Board } from "@prisma/client";
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

export const getBoards = async (): Promise<Board[]> => {
  const response = await fetch(`${server}/api/boards`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
