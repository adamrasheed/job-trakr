import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBoardHandler } from "../handlers/boards";

const UsePostBoard = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (payload: { name: string; userId: string }) => postBoardHandler(payload),
    { onSuccess: () => queryClient.invalidateQueries(["boards"]) }
  );

  return { postBoard: mutate, isPostingBoard: isLoading };
};

export default UsePostBoard;
