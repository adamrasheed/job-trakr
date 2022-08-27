import { server } from "../utils/constants";

export const getJobs = async (boardId?: string) => {
  const url = new URL(`${server}/api/jobs`, { quer });
  const response = await fetch("api/jobs", {
    method: "GET",
    body: JSON.stringify({
      data: {
        boardId,
      },
    }),
  });

  return await response.json();
};
