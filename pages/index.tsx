import { Board, User } from "@prisma/client";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import BoardsList from "../components/BoardsList";
import CreateBoard from "../components/CreateBoard";
import { createBoard } from "../handlers/boards";

import prisma from "../lib/prisma";

import { FormattedBoard, FormattedUser } from "../types";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  user,
  boards,
}) => {
  console.log(user, boards);

  const handleSubmit = async (name: string) => {
    try {
      await createBoard({ name, userId: user?.id || "" });
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  return (
    <main>
      <h1 className="page_title">Track Your Job Applications</h1>
      <p>
        Hey {user.firstName} {user.lastName}
      </p>
      <CreateBoard onSubmit={handleSubmit} />
      {!!boards.length && <BoardsList boards={boards} />}
    </main>
  );
};

type IndexProps = {
  user: FormattedUser | null;
  boards: FormattedBoard[];
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const data = await prisma.user.findFirst({
    where: { id: "888ab0a8-b32c-47e1-9882-7a4136d1d1f2" },
  });

  const boardsData = await prisma.board.findMany();

  if (!data) {
    return { props: { user: null, boards: [] } };
  }

  const user: FormattedUser = {
    ...data,
    createdAt: data.createdAt.toISOString(),
  };

  const boards = boardsData.map((board) => ({
    ...board,
    createdAt: board.createdAt.toISOString(),
  }));

  return { props: { user, boards } };
};

export default Home;
