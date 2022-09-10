import { trpc } from "../utils/trpcs";

const UsePostBoard = () => {
  const utils = trpc.useContext();

  const { mutate, isLoading } = trpc.useMutation(["board"], {
    onSuccess: () => {
      utils.invalidateQueries(["boards"]);
    },
  });

  return { postBoard: mutate, isPostingBoard: isLoading };
};

export default UsePostBoard;
