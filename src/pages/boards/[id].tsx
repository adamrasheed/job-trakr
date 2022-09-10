import { NextPage } from "next";
import { useRouter } from "next/router";
import JobForm from "../../components/JobForm";
import JobsList from "../../components/JobsList";
import UseFetchBoard from "../../hooks/useFetchBoard";
import UseFetchJobs from "../../hooks/UseFetchJobs";
import UsePostJob from "../../hooks/UsePostJob";

const BoardPage: NextPage = ({}) => {
  const { query } = useRouter();
  const boardId = query!.id as string;

  const { board } = UseFetchBoard({ id: boardId });
  const { jobs, isLoading, error } = UseFetchJobs({ boardId });

  const { postJob, isPostingJob, jobError } = UsePostJob();

  const showJobs = !!jobs && !isLoading;

  const handleJobSubmit = ({ name, url }: { name: string; url: string }) => {
    postJob(
      { name, url, boardId },
      {
        onSuccess: () => console.log("success on posting job"),
      }
    );
  };

  return (
    <main>
      <h2 className="page_title">{board?.name}</h2>
      <JobForm onSubmit={handleJobSubmit} />
      {showJobs && <JobsList jobs={jobs} />}
    </main>
  );
};

export default BoardPage;
