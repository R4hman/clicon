import { changeUserInfo } from "@/services/user/changeUserInfo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const useChangeUser = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: changeUserInfo,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
  return {};
};

export default useChangeUser;
