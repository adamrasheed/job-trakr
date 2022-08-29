import { useQuery } from "@tanstack/react-query";
import { fetchBoardsHandler } from "../handlers/boards";
import { IBoard } from "../types";

const UseFetchBoards = ({
  userId,
  initialBoards,
}: {
  userId?: string;
  initialBoards: IBoard[];
}) => {
  const { data, isLoading, error } = useQuery(
    ["boards"],
    () => fetchBoardsHandler(),
    { enabled: !!userId, initialData: initialBoards }
  );

  return { boards: data, isLoadingBoards: isLoading, boardsError: error };
};

export default UseFetchBoards;
