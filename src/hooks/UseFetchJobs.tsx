import { IJob } from "../../types";
import { trpc } from "../utils/trpcs";

const UseFetchJobs = ({ boardId }: { boardId: string }) => {
  const { data, isLoading, error } = trpc.useQuery(["jobs", { boardId }]);

  return { jobs: data, isLoading, error };
};

export default UseFetchJobs;
