import { server } from "../utils/constants";
import qs from "qs";

export const getJobs = async (boardId?: string) => {
  // const url = new URL(`${server}/api/jobs`);
  let url = `${server}/api/jobs`;

  if (boardId) {
    const params = qs.stringify({ boardId });
    url = `${url}?${params}`;
  }

  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
