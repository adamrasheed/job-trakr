import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJob } from "../handlers/jobs";
import { trpc } from "../utils/trpcs";

type Payload = {
  boardId: string;
  name: string;
  url: string;
};
const UsePostJob = () => {
  const utils = trpc.useContext();

  const { mutate, isLoading, error } = trpc.useMutation(["job"], {
    onSuccess: () => {
      utils.invalidateQueries(["jobs"]);
    },
  });

  return { postJob: mutate, isPostingJob: isLoading, jobError: error };
};

export default UsePostJob;
