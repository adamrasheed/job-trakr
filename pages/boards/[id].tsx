import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import JobForm from "../../components/JobForm";
import JobsList from "../../components/JobsList";
import { getBoard, fetchBoardsHandler } from "../../handlers/boards";
import { fetchJobs } from "../../handlers/jobs";
import UseFetchJobs from "../../hooks/useFetchJobs";
import UsePostJob from "../../hooks/UsePostJob";
import { IBoard, IJob } from "../../types";

const BoardPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  initialJobs,
  board,
}) => {
  const { jobs, isLoading } = UseFetchJobs({ boardId: board.id, initialJobs });
  const { postJob, isPostingJob, jobError } = UsePostJob();

  const showJobs = !!initialJobs?.length && !isLoading;

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
    const boards = await fetchBoardsHandler();

    const paths = boards.map((board) => ({
      params: { id: board.id },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error({ error });
  }
};

type BoardPageProps = {
  board: IBoard;
  initialJobs: IJob[];
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
