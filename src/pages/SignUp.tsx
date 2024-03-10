import React, { ReactElement, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoEyeSharp } from "react-icons/io5";
import { FaArrowRight, FaEyeSlash } from "react-icons/fa";

import { z } from "zod";

import ReusableButton from "@/components/reusable/ReusableButton";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { TLogin } from "@/types";
import { register as registerApi } from "../services/auth/apiRegister";

type TSignUp = TLogin;

const signUpSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    userName: z.string(),
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type TSignUpSchema = z.infer<typeof signUpSchema>;

const SignUp: React.FC<TSignUp> = ({ type, setType }): ReactElement => {
  const [passwordIsClose, setPasswordIsClose] = useState<boolean>(true);
  const [confirmPasswordIsClose, setConfirmPasswordIsClose] =
    useState<boolean>(true);
  const navigate: NavigateFunction = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    watch,
    getValues,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = (data: TSignUpSchema) => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 3000);
    });

    registerApi(data).then((res) => {
      if (res.msg) {
        navigate("/login");
      }
    });

    // reset();
  };

  const handleSwitch = (str: string) => {
    setType(str);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center w-full h-[604px]">
      <div className="shadow-loginShadow w-[510px] h-[550px]  pb-4">
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
                ? "after:absolute after:top-[60px] after:left-[210px] after:p-[1px] after:w-[295px] after:bg-primary500 "
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
            onSubmit={handleSubmit((data: TSignUpSchema) => onSubmit(data))}
          >
            <div className="flex items-center  space-x-2">
              <div className="flex flex-col gap-y-3 mb-3">
                <label htmlFor="name">Ad</label>

                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="Ad"
                  className="border border-gray-400 outline-none focus:bg-[#E4E7E9] p-2 rounded-[5px]"
                />
                {errors.firstName && (
                  <p className="text-red-500">{`${errors.firstName.message}`}</p>
                )}
              </div>
              <div className="flex flex-col gap-y-3 mb-3">
                <label htmlFor="name">Soyad</label>

                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Soyad"
                  className="border border-gray-400 outline-none focus:bg-[#E4E7E9] p-2 rounded-[5px]"
                />
                {errors.lastName && (
                  <p className="text-red-500">{`${errors.lastName.message}`}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex flex-col gap-y-3 mb-3">
                <label htmlFor="name">İstifadəçi adı</label>

                <input
                  {...register("userName")}
                  type="text"
                  placeholder="İstifadəçi adı"
                  className="border border-gray-400 outline-none focus:bg-[#E4E7E9] p-2 rounded-[5px]"
                />
                {errors.userName && (
                  <p className="text-red-500">{`${errors.userName.message}`}</p>
                )}
              </div>

              <div className="flex flex-col gap-y-3 mb-3">
                <label htmlFor="email">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 outline-none focus:bg-[#E4E7E9] p-2 rounded-[5px]"
                />
                {errors.email && (
                  <p className="text-red-500">{`${errors.email.message}`}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex flex-col gap-y-3 mb-6 relative">
                <label className="flex justify-between" htmlFor="password">
                  Parol
                </label>

                <input
                  {...register("password")}
                  type={passwordIsClose ? "password" : "text"}
                  placeholder="Password"
                  className="border border-gray-400 focus:bg-[#E4E7E9] outline-none
                p-2 rounded-[5px]"
                />
                <span className="absolute right-3 top-12">
                  {passwordIsClose ? (
                    <FaEyeSlash onClick={() => setPasswordIsClose(false)} />
                  ) : (
                    <IoEyeSharp onClick={() => setPasswordIsClose(true)} />
                  )}
                </span>
                {errors.password && (
                  <p className="text-red-500">{`${errors.password.message}`}</p>
                )}
              </div>

              <div className="flex flex-col gap-y-3 mb-6 relative">
                <label className="flex justify-between" htmlFor="password">
                  Parolu təsdiq et
                </label>

                <input
                  {...register("confirmPassword")}
                  type={confirmPasswordIsClose ? "password" : "text"}
                  placeholder="Confirm password"
                  className="border border-gray-400 focus:bg-[#E4E7E9] outline-none
              p-2 rounded-[5px]"
                />

                <span className="absolute right-3 top-12">
                  {confirmPasswordIsClose ? (
                    <FaEyeSlash
                      onClick={() => setConfirmPasswordIsClose(false)}
                    />
                  ) : (
                    <IoEyeSharp
                      onClick={() => setConfirmPasswordIsClose(true)}
                    />
                  )}
                </span>
                {errors.confirmPassword && (
                  <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
                )}
              </div>
            </div>

            <ReusableButton
              bgColor={isSubmitting ? "bg-gray-500" : "bg-primary500"}
              disabled={isSubmitting}
              textColor="text-white"
            >
              SIGN UP <FaArrowRight />
            </ReusableButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
