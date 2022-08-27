import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";
import JobsTable from "../../components/JobsTable";
import { getBoards } from "../../handlers/boards";

import { getJobs } from "../../handlers/jobs";
import prisma from "../../lib/prisma";
import { FormattedJob } from "../../types";
import board from "../api/board";

const BoardPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  jobs,
}) => {
  const { query } = useRouter();
  const { id } = query;

  console.log({ jobs });

  const hasJobs = !!jobs.length;

  return (
    <main>
      <h2>Board Page {id}</h2>
      {hasJobs && <JobsTable jobs={jobs} />}
    </main>
  );
};

export default BoardPage;

export const getStaticPaths = async () => {
  try {
    const boards = await getBoards();

    console.log({ boards });

    const paths = boards.map((board) => ({
      params: { id: board.id },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log({ error });
  }
};

type BoardPageProps = {
  jobs: FormattedJob[];
};

export const getStaticProps: GetStaticProps<BoardPageProps> = async (
  context
) => {
  const boardId = context.params?.id || "";

  const jobs = await getJobs(boardId as string);

  console.log({ fetchedJibs: jobs });

  return {
    props: { jobs },
  };
};
