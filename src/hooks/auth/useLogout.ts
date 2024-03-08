import { logout } from "@/services/auth/apiLogin";
import { logout as userLogout } from "@/app/features/userSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { deleteCookies } from "@/lib/utils";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate: NavigateFunction = useNavigate();
  const dispatch: Dispatch = useDispatch();
  const { mutate, isPending } = useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      console.log("data", data);
      dispatch(userLogout());
      queryClient.invalidateQueries({ queryKey: ["user"] });
      deleteCookies();
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return {
    mutate,
    isPending,
  };
};
