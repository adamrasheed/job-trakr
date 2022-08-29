import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../handlers/jobs";
import { FormattedJob } from "../types";

type Props = {
  boardId?: string;
  initialJobs: FormattedJob[];
};
const UseFetchJobs = ({ boardId, initialJobs }: Props) => {
  const { data, isLoading, error } = useQuery(
    ["jobs"],
    () => fetchJobs(boardId),
    { initialData: initialJobs }
  );

  return { jobs: data, isLoading, error };
};

export default UseFetchJobs;
