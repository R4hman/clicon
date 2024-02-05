import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FaArrowRight } from "react-icons/fa6";

import { z } from "zod";

import ReusableButton from "@/components/reusable/ReusableButton";
import { Link } from "react-router-dom";
const forgetPasswordSchema = z.object({
  email: z.string().email(),
});

type TForgetPasswordSchema = z.infer<typeof forgetPasswordSchema>;

const ForgetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<TForgetPasswordSchema>({
    resolver: zodResolver(forgetPasswordSchema),
  });

  const onSubmit = (data: TForgetPasswordSchema) => {
    console.log("login data", data);

    reset();
  };

  return (
    <div className="flex items-center justify-center w-full h-[604px]">
      <div className="shadow-loginShadow w-[420px] h-[500px]  pb-4">
        <div className="flex flex-col px-10 pt-10 ">
          <h3 className="text-[20px] text-gray900 font-semibold text-center mb-3">
            Forget Password
          </h3>
          <p className="text-sm text-gray600 text-center">
            Enter the email address or mobile phone number associated with your
            Clicon account.
          </p>
        </div>
        <div className="flex items-center  justify-center w-full mt-6 ">
          <form
            className=" w-full px-10  rounded-[10px]"
            onSubmit={handleSubmit((data: TForgetPasswordSchema) =>
              onSubmit(data)
            )}
          >
            <div className="flex flex-col gap-y-3 mb-6">
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

            <ReusableButton
              bgColor={isSubmitting ? "bg-gray-500" : "bg-primary500"}
              disabled={isSubmitting}
              textColor="text-white"
            >
              SEND CODE <FaArrowRight />
            </ReusableButton>
          </form>
        </div>
        <div className="flex items-center gap-x-3 px-10 mt-6">
          Already have an account?{" "}
          <Link className="text-secondary500 text-sm" to="/login">
            Sign in
          </Link>
        </div>
        <div className="flex items-center gap-x-3 px-10">
          Don't have account?{" "}
          <Link className="text-secondary500 text-sm" to="/sign-up">
            Sign up
          </Link>
        </div>
        <div className="px-10 py-6">
          <div className=" w-full h-[1.5px] bg-gray100"></div>
        </div>
        <p className="px-10">
          You may contact{" "}
          <Link className="text-primary500" to="">
            Customer Service
          </Link>{" "}
          for help restoring access to your account.
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
