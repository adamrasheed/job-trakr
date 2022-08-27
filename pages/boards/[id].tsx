import { GetStaticProps } from "next";
import { getBoards } from "../../handlers/boards";

import { getJobs } from "../../handlers/jobs";
import prisma from "../../lib/prisma";
import { FormattedJob } from "../../types";

const BoardPage = () => {
  return (
    <main>
      <h2>Board Page</h2>
    </main>
  );
};

export default BoardPage;

export const getStaticPaths = async () => {
  const boards = await getBoards();

  const paths = boards.map((board) => ({
    params: { id: board.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

type BoardPageProps = {
  jobs: FormattedJob[];
};

export const getStaticProps: GetStaticProps<BoardPageProps> = async (
  params
) => {
  console.log(params);

  const jobs = await getJobs();

  return {
    props: { jobs },
  };
};
