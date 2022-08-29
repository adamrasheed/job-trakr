import { IUser } from "../types";
import { server } from "../utils/constants";

export async function fetchUserHandler({
  userId,
}: {
  userId: string;
}): Promise<IUser> {
  const response = await fetch(`${server}/api/user?id=${userId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
