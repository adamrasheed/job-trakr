import { trpc } from "../utils/trpcs";

const UseFetchUser = ({ userId }: { userId: string }) => {
  const { data, isLoading, error } = trpc.useQuery(["user", { id: userId }]);

  return { user: data, isLoadingUser: isLoading, userError: error };
};

export default UseFetchUser;
