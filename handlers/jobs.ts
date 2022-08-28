import { server } from "../utils/constants";
import qs from "qs";

export const getJobs = async (boardId?: string) => {
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

export const createJob = async ({
  name,
  url,
  boardId,
}: {
  name: string;
  url: string;
  boardId: string;
}) => {
  const response = await fetch(`${server}/api/job`, {
    method: "POST",
    body: JSON.stringify({
      data: {
        name,
        url,
        boardId,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
