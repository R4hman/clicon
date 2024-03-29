import { login } from "@/services/auth/apiLogin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { login as userLogin } from "@/app/features/userSlice";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { TLoginUser } from "@/types";
import { setCookie } from "@/lib/utils";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate: NavigateFunction = useNavigate();
  const dispatch: Dispatch = useDispatch();
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data: TLoginUser) => {
      console.log("data", data);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      dispatch(userLogin(data));
      setCookie("refreshToken", data.refreshTokenJWT);
      setCookie("accessToken", data.accessTokenJwt);
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
