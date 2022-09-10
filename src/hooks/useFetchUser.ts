import { useQuery } from "@tanstack/react-query";
import { fetchUserHandler } from "../handlers/user";
import { IUser } from "../../types";
import { trpc } from "../utils/trpcs";
import React from "react";

const UseFetchUser = ({ userId }: { userId: string }) => {
  const { data, isLoading, error } = trpc.useQuery(["user", { id: userId }]);

  return { user: data, isLoadingUser: isLoading, userError: error };
};

export default UseFetchUser;
