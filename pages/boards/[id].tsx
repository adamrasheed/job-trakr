import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import JobForm from "../../components/JobForm";
import JobsList from "../../components/JobsList";
import { getBoard, getBoards } from "../../handlers/boards";
import { createJob, fetchJobs } from "../../handlers/jobs";
import UseFetchJobs from "../../hooks/UseFetchJobs";
import UsePostJob from "../../hooks/UsePostJob";
import { FormattedBoard, FormattedJob } from "../../types";

const BoardPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  initialJobs,
  board,
}) => {
  const { jobs, isLoading } = UseFetchJobs({ boardId: board.id, initialJobs });
  const { postJob, isPostingJob, isSuccess } = UsePostJob();

  const showJobs = !!initialJobs?.length && !isLoading;
  console.log({ jobs });

  const handleJobSubmit = ({ name, url }: { name: string; url: string }) => {
    postJob(
      { name, url, boardId: board.id },
      {
        onSuccess: () => console.log("success on posting job"),
      }
    );
  };

  return (
    <main>
      <h2 className="page_title">{board.name}</h2>
      <JobForm onSubmit={handleJobSubmit} />
      {showJobs && <JobsList jobs={jobs} />}
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
  initialJobs: FormattedJob[];
  error?: unknown;
};

export const getStaticProps: GetStaticProps<BoardPageProps> = async ({
  params,
}) => {
  const boardId = params?.id || "";

  const board = await getBoard(boardId as string);

  const initialJobs = await fetchJobs(boardId as string);

  return {
    props: { initialJobs, board },
  };
};
