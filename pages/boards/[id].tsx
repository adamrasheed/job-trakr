import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import JobForm from "../../components/JobForm";
import JobsList from "../../components/JobsList";
import { getBoard, getBoards } from "../../handlers/boards";
import { createJob, getJobs } from "../../handlers/jobs";
import { FormattedBoard, FormattedJob } from "../../types";

const BoardPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  jobs,
  board,
}) => {
  const hasJobs = !!jobs.length;

  const handleJobSubmit = (values: { name: string; url: string }) => {
    createJob({ ...values, boardId: board.id }).then((data) => {
      console.log({ data });
    });
  };

  return (
    <main>
      <h2 className="page_title">{board.name}</h2>
      <JobForm onSubmit={handleJobSubmit} />
      {hasJobs && <JobsList jobs={jobs} />}
    </main>
  );
};

export default BoardPage;

export const getStaticPaths = async () => {
  try {
    const boards = await getBoards();

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
  board: FormattedBoard;
  jobs: FormattedJob[];
};

export const getStaticProps: GetStaticProps<BoardPageProps> = async (
  context
) => {
  const boardId = context.params?.id || "";

  const board = await getBoard(boardId as string);

  const jobs = await getJobs(boardId as string);

  return {
    props: { jobs, board },
  };
};
