import { changeUserInfo } from "@/services/user/changeUserInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, ReactElement, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import defaultPic from "../assets/defaultProfilePhoto.png";
import useCurrentUser from "@/hooks/user/useCurrentUser";
import ReusableButton from "@/components/reusable/ReusableButton";
import SettingsPassword from "@/components/SettingsPassword";

const userInfoSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  userName: z.string(),
  address: z.string(),
});

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

type TUserInfoSchema = z.infer<typeof userInfoSchema>;

const Settings: FC = (): ReactElement => {
  const { user, userIsLoading } = useCurrentUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    watch,
    getValues,
  } = useForm<TUserInfoSchema>({
    resolver: zodResolver(userInfoSchema),
  });

  const onSubmit: SubmitHandler<TUserInfoSchema> = (data: TUserInfoSchema) => {
    const newObj = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    changeUserInfo(newObj).then((res) => console.log("res", res));

    reset();
  };

  if (userIsLoading) {
    return <div>loading..</div>;
  }

  return (
    <div className="flex flex-col space-y-5">
      <div className=" border border-gray100 rounded-[3px]">
        <div className="border-b-2 border-gray-100 p-4">Account Settings</div>
        <div className="flex space-x-2 p-5">
          <img
            src={defaultPic}
            className="basis-1/3 w-[150px] h-[150px] object-contain"
            alt="user img"
          />
          <form
            onSubmit={handleSubmit((data: TUserInfoSchema) => onSubmit(data))}
            className=" space-y-5"
          >
            <div className="flex items-center space-x-5">
              <div className="flex flex-col space-y-2">
                <label htmlFor="firstName">First Name</label>
                <input
                  {...register("firstName")}
                  type="text"
                  id="firstName"
                  className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[350px]"
                  placeholder={user?.user?.firstName || "first name"}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="lastName">Last Name</label>
                <input
                  {...register("lastName")}
                  id="lastName"
                  type="text"
                  className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[350px]"
                  placeholder={user?.user?.lastName || "last name"}
                />
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex flex-col space-y-2">
                <label htmlFor="userName">Username</label>
                <input
                  {...register("userName")}
                  type="text"
                  id="userName"
                  className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[350px]"
                  placeholder={user?.user?.userName || "username"}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="address">Address</label>
                <input
                  {...register("address")}
                  id="address"
                  type="text"
                  className="border-[2px]  border-gray-200 rounded-[4px] p-3 w-[350px]"
                  placeholder={user?.user?.address || "address"}
                />
              </div>
            </div>
            <ReusableButton
              style={{ width: "161px", marginTop: "1rem" }}
              textColor="text-white"
              bgColor={"bg-primary500"}
              type="submit"
            >
              SAVE CHANGES
            </ReusableButton>
          </form>
        </div>
      </div>
      <SettingsPassword />
    </div>
  );
};

export default Settings;
