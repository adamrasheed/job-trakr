import type { NextPage } from "next";

import BoardsList from "../components/BoardsList";
import CreateBoard from "../components/CreateBoard";
import useAuthSession from "../hooks/useAuthSession";
import UseFetchBoards from "../hooks/useFetchBoards";
import UseFetchUser from "../hooks/useFetchUser";
import UsePostBoard from "../hooks/usePostBoard";

import { IBoard, IUser } from "../../types";

const DEFAULT_USER_ID = "534cd55d-4a97-42ce-9c81-cc9decf2f805";

const Home: NextPage = () => {
  // const [session, isSessionLoading] = useAuthSession();

  const { postBoard, isPostingBoard } = UsePostBoard();
  const { user, isLoadingUser, userError } = UseFetchUser({
    userId: DEFAULT_USER_ID,
  });

  const { boards, isLoadingBoards, boardsError } = UseFetchBoards({
    userId: user?.id || DEFAULT_USER_ID,
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
