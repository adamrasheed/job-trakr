import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { DefaultSession } from "next-auth";
import { useRouter } from "next/router";

export async function fetchSession() {
  const res = await fetch("/api/auth/session");
  const session = await res.json();
  if (Object.keys(session).length) {
    return session;
  }
  return null;
}

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

  const query = useQuery<Session>(["session"], fetchSession, {
    onSettled(data, error) {
      // if (queryConfig.onSettled) {
      //   queryConfig.onSettled(data, error);
      // }

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
