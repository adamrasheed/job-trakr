import { DefaultSession } from "next-auth";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpcs";

type Session = DefaultSession | undefined | null;

type UseAuthSession = (props?: {
  required?: boolean;
  redirectTo?: string;
  // queryConfig?: UseQueryOptions;
}) => [Session, boolean];

const useAuthSession: UseAuthSession = ({
  required,
  redirectTo = "/api/auth/signin?error=Random",
  // queryConfig = {},
} = {}) => {
  const router = useRouter();

  const query = trpc.useQuery(["session"], {
    onError: (err) => {
      console.log({ thisError: err });
    },
    onSettled(data, error) {
      console.log({ data, error });

      if (data || !required) {
        return;
      }
      router.push(redirectTo);
    },
  });

  return [query.data, query.status === "loading"];
};

export default useAuthSession;
