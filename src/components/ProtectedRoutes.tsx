import { getCookie } from "@/lib/utils";
import React, { FC, ReactElement, useEffect, useMemo } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
type TProtectedRoutes = {
  children: React.ReactNode;
};
const ProtectedRoutes: FC<TProtectedRoutes> = ({ children }): ReactElement => {
  const accessToken = useMemo(() => getCookie("accessToken"), []);
  const refreshToken = useMemo(() => getCookie("refreshToken"), []);
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    if (!accessToken || !refreshToken) {
      navigate("/");
    }
  }, [accessToken, refreshToken]);
  return <div>{children}</div>;
};

export default ProtectedRoutes;
