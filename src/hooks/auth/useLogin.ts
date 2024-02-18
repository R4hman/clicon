import { login } from "@/services/auth/apiLogin";
import { useMutation } from "@tanstack/react-query";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { login as userLogin } from "@/app/features/userSlice";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { TLoginUser } from "@/types";
import { setCookie } from "@/lib/utils";

export const useLogin = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch: Dispatch = useDispatch();
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data: TLoginUser) => {
      dispatch(userLogin(data));
      setCookie("refreshToken", data.refreshTokenJWT, 7);
      setCookie("accessToken", data.accessTokenJwt, 7);
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
