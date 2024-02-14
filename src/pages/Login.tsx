import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoEyeSharp } from "react-icons/io5";
import { FaArrowRight, FaEyeSlash } from "react-icons/fa";

import { z } from "zod";

import ReusableButton from "@/components/reusable/ReusableButton";
import { Link, useNavigate } from "react-router-dom";
import { TLogin } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/services/auth/apiLogin";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10, "Parol ən az 8 rəqəmli olmalıdır"),
});

type TLoginSchema = z.infer<typeof loginSchema>;

const Login: React.FC<TLogin> = ({ type, setType }) => {
  const [passwordIsClose, setPasswordIsClose] = useState<boolean>(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("success data", data);
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (data: TLoginSchema) => {
    console.log("login data", data);
    mutate(data);

    reset();
  };

  const handleSwitch = (str: string) => {
    setType(str);
    navigate("/sign-up");
  };

  return (
    <div className="flex items-center justify-center w-full h-[604px]">
      <div className="shadow-loginShadow w-[420px] h-[550px]  pb-4">
        <div className="py-4 flex items-center border-b-2 border px-8 relative ">
          <span
            onClick={() => handleSwitch("sign-in")}
            className={`flex-1 cursor-pointer font-semibold text-[20px] text-center leading-7
            ${
              type === "sign-in"
                ? "after:absolute after:top-[60px] after:left-0 after:p-[1px] after:w-[210px] after:bg-primary500 "
                : "text-gray500"
            }
            `}
          >
            Sign in
          </span>
          <span
            onClick={() => handleSwitch("sign-up")}
            className={`flex-1 cursor-pointer font-semibold text-[20px] text-center leading-7

            ${
              type === "sign-up"
                ? "after:absolute after:top-[60px] after:left-[210px] after:p-[1px] after:w-[210px] after:bg-primary500 "
                : "text-gray500"
            }
            `}
          >
            Sign up
          </span>
        </div>
        <div className="flex items-center  justify-center w-full ">
          <form
            className=" w-full p-10 rounded-[10px]"
            onSubmit={handleSubmit((data: TLoginSchema) => onSubmit(data))}
          >
            <div className="flex flex-col gap-y-3 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="border border-gray-400 outline-none focus:bg-[#E4E7E9] p-2 rounded-[5px]"
                {...register("email")}
                type="text"
                id="email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
            <div className="flex flex-col gap-y-3 mb-6 relative">
              <label className="flex justify-between" htmlFor="password">
                Parol{" "}
                <Link
                  to="/forgetPassword"
                  className="text-secondary500 text-sm"
                >
                  Forget Password
                </Link>
              </label>
              <input
                className="border border-gray-400 focus:bg-[#E4E7E9] outline-none p-2 rounded-[5px]"
                {...register("password")}
                type={passwordIsClose ? "password" : "text"}
                id="password"
              />
              <span className="absolute right-3 top-12">
                {passwordIsClose ? (
                  <FaEyeSlash onClick={() => setPasswordIsClose(false)} />
                ) : (
                  <IoEyeSharp onClick={() => setPasswordIsClose(true)} />
                )}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}

            <ReusableButton
              bgColor={isPending ? "bg-gray-500" : "bg-primary500"}
              disabled={isPending}
              textColor="text-white"
            >
              SIGN IN <FaArrowRight />
            </ReusableButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
