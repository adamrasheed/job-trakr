import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import BoardsList from "../components/BoardsList";
import CreateBoard from "../components/CreateBoard";
import { fetchBoardsHandler } from "../handlers/boards";
import { fetchUserHandler } from "../handlers/user";
import UseFetchBoards from "../hooks/useFetchBoards";
import UseFetchUser from "../hooks/useFetchUser";
import UsePostBoard from "../hooks/usePostBoard";

import { IBoard, IUser } from "../types";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  initialUser,
  initialBoards,
}) => {
  const { postBoard, isPostingBoard } = UsePostBoard();
  const { user, isLoadingUser, userError } = UseFetchUser({
    userId: "888ab0a8-b32c-47e1-9882-7a4136d1d1f2",
    initialUser,
  });

  const { boards, isLoadingBoards, boardsError } = UseFetchBoards({
    userId: user?.id,
    initialBoards,
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

type IndexProps = {
  initialUser: IUser;
  initialBoards: IBoard[];
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const initialUser = await fetchUserHandler({
    userId: "888ab0a8-b32c-47e1-9882-7a4136d1d1f2",
  });

  const initialBoards = await fetchBoardsHandler();

  return { props: { initialUser, initialBoards } };
};

export default Home;
