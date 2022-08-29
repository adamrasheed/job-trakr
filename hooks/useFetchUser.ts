import { useQuery } from "@tanstack/react-query";
import { fetchUserHandler } from "../handlers/user";
import { IUser } from "../types";

type Props = {
  userId: string;
  initialUser: IUser;
};
const UseFetchUser = ({ userId, initialUser }: Props) => {
  const { data, isLoading, error } = useQuery(
    ["user"],
    () => fetchUserHandler({ userId }),
    { initialData: initialUser }
  );

  return { user: data, isLoadingUser: isLoading, userError: error };
};

export default UseFetchUser;
