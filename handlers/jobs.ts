import { server } from "../utils/constants";

export const getJobs = async (boardId?: string) => {
  // const url = new URL(`${server}/api/jobs`);

  const response = await fetch(`${server}/api/jobs`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
