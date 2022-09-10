import { useQuery } from "@tanstack/react-query";
import { IBoard } from "../../types";
import { trpc } from "../utils/trpcs";

const UseFetchBoards = ({ userId }: { userId: string }) => {
  const { data, isLoading, error } = trpc.useQuery(["boards", { userId }], {
    enabled: !!userId,
  });

  return { boards: data, isLoadingBoards: isLoading, boardsError: error };
};

export default UseFetchBoards;
