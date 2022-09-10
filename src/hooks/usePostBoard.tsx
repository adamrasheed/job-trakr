import Router from "next/router";
import { trpc } from "../utils/trpcs";

const UsePostBoard = () => {
  const utils = trpc.useContext();

  const { mutate, isLoading } = trpc.useMutation(["board"], {
    onSuccess: (newBoard) => {
      utils.invalidateQueries(["boards"]);
      Router.push(`/boards/${newBoard.id}`);
    },
  });

  return { postBoard: mutate, isPostingBoard: isLoading };
};

export default UsePostBoard;
