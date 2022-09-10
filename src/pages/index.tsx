import type { NextPage } from "next";

import BoardsList from "../components/BoardsList";
import CreateBoard from "../components/CreateBoard";
import useAuthSession from "../hooks/useAuthSession";
import UseFetchBoards from "../hooks/useFetchBoards";
import UseFetchUser from "../hooks/useFetchUser";
import UsePostBoard from "../hooks/usePostBoard";

import { IBoard, IUser } from "../../types";

const Home: NextPage = () => {
  // const [session, isSessionLoading] = useAuthSession();

  const { postBoard, isPostingBoard } = UsePostBoard();
  const { user, isLoadingUser, userError } = UseFetchUser({
    userId: "888ab0a8-b32c-47e1-9882-7a4136d1d1f2",
  });

  const { boards, isLoadingBoards, boardsError } = UseFetchBoards({
    userId: user?.id || "888ab0a8-b32c-47e1-9882-7a4136d1d1f2",
  });

  const handleSubmit = async (name: string) => {
    postBoard({ name, userId: user!.id });
  };

  if (!user) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  if (!!boardsError) {
    console.error(boardsError);
    throw new Error();
  }

  return (
    <main>
      <h1 className="page_title">Track Your Job Applications</h1>
      <p>
        Hey {user.firstName} {user.lastName}
      </p>
      <CreateBoard isLoading={isPostingBoard} onSubmit={handleSubmit} />
      {!!boards?.length && <BoardsList boards={boards} />}
    </main>
  );
};

export default Home;
