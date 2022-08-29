import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJob } from "../handlers/jobs";

type Payload = {
  boardId: string;
  name: string;
  url: string;
};
const UsePostJob = () => {
  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const { mutate, isLoading, error } = useMutation(
    (payload: Payload) => createJob(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["jobs"]);
      },
    }
  );

  return { postJob: mutate, isPostingJob: isLoading, jobError: error };
};

export default UsePostJob;
