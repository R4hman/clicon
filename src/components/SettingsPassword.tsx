import ReusableButton from "./reusable/ReusableButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { changeUserInfo } from "@/services/user/changeUserInfo";

const userNewPasswordSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, "Password must be at least 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type TUserNewPasswordSchema = z.infer<typeof userNewPasswordSchema>;

const SettingsPassword = () => {
  const [password, setPassword] = useState({
    newPasswordIsClose: true,
    confirmPasswordIsClose: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    watch,
    getValues,
  } = useForm<TUserNewPasswordSchema>({
    resolver: zodResolver(userNewPasswordSchema),
  });

  const onSubmit: SubmitHandler<TUserNewPasswordSchema> = (
    data: TUserNewPasswordSchema
  ) => {
    // const newObj = Object.fromEntries(
    //   Object.entries(data).filter(([key, value]) => value !== "")
    // );
    changeUserInfo(data).then((res) => console.log("res", res));
    reset();
  };
  return (
    <div className=" border border-gray100 rounded-[3px]">
      <div className="border-b-2 border-gray-100 p-4">Change Password</div>
      <form
        onSubmit={handleSubmit((data: TUserNewPasswordSchema) =>
          onSubmit(data)
        )}
        className=" space-y-5 p-5"
      >
        <div className="space-y-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              className="border-[2px]  border-gray-200 rounded-[4px] p-3  w-full"
              placeholder=""
            />
          </div>
          <div className="flex flex-col space-y-2 relative">
            <label htmlFor="password">New Password</label>
            <input
              {...register("password")}
              id="password"
              type={`${password.newPasswordIsClose ? "password" : "text"}`}
              className=" border-[2px]  border-gray-200 rounded-[4px] p-3 w-full"
              placeholder="8+ characters"
            />
            <span className="absolute right-2.5 top-10">
              {password.newPasswordIsClose ? (
                <FaEyeSlash
                  onClick={() =>
                    setPassword((prev) => ({
                      ...prev,
                      newPasswordIsClose: false,
                    }))
                  }
                />
              ) : (
                <IoEyeSharp
                  onClick={() =>
                    setPassword((prev) => ({
                      ...prev,
                      newPasswordIsClose: true,
                    }))
                  }
                />
              )}
            </span>
          </div>
          <div className="flex flex-col space-y-2 relative">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              {...register("confirmPassword")}
              id="confirmPassword"
              type={`${password.confirmPasswordIsClose ? "password" : "text"}`}
              className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-full"
              placeholder=""
            />
            <span className="absolute right-2.5 top-10">
              {password.confirmPasswordIsClose ? (
                <FaEyeSlash
                  onClick={() =>
                    setPassword((prev) => ({
                      ...prev,
                      confirmPasswordIsClose: false,
                    }))
                  }
                />
              ) : (
                <IoEyeSharp
                  onClick={() =>
                    setPassword((prev) => ({
                      ...prev,
                      confirmPasswordIsClose: true,
                    }))
                  }
                />
              )}
            </span>
          </div>
        </div>

        <ReusableButton
          style={{ width: "197px", marginTop: "1rem" }}
          textColor="text-white"
          bgColor={"bg-primary500"}
          type="submit"
        >
          CHANGE PASSWORD
        </ReusableButton>
      </form>
    </div>
  );
};

export default SettingsPassword;
