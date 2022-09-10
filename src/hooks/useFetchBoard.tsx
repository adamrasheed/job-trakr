import { useQuery } from "@tanstack/react-query";
import { IBoard } from "../../types";
import { trpc } from "../utils/trpcs";

const UseFetchBoard = ({ id }: { id: string }) => {
  const { data, isLoading, error } = trpc.useQuery(["board", { id }]);

  return { board: data, isLoadingBoards: isLoading, boardsError: error };
};

export default UseFetchBoard;
