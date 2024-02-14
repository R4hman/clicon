import ReusableButton from "@/components/reusable/ReusableButton";
import { verifyEmail } from "@/services/auth/apiVerifyEmail";
import { useMutation } from "@tanstack/react-query";
import { FC, ReactElement } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyEmail: FC = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: verifyEmail,
    onSuccess: (data) => {
      console.log("success data", data);
      toast.success(data.msg);
      navigate("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const handleVerifyEmail = () => {
    const obj: { verificationToken: string; email: string } = {
      verificationToken: "",
      email: "",
    };
    if (searchParams.get("token") && searchParams.get("email")) {
      obj.verificationToken = searchParams.get("token")!;
      obj.email = searchParams.get("email")!;
    }

    mutate(obj);
  };
  return (
    <div className="flex items-center justify-center w-full h-[604px]">
      <div className="shadow-loginShadow w-[420px] h-[500px]  pb-4">
        <div className="flex flex-col px-10 pt-10 ">
          <h3 className="text-[20px] text-gray900 font-semibold text-center mb-3">
            Verify
          </h3>
          <p className="text-sm text-gray600 text-center">
            Enter the email address or mobile phone number associated with your
            Clicon account.
          </p>
        </div>
        <ReusableButton
          bgColor={isPending ? "bg-gray-500" : "bg-primary500"}
          disabled={isPending}
          onClick={handleVerifyEmail}
          textColor="text-white"
        >
          Verify Me
        </ReusableButton>
      </div>
    </div>
  );
};

export default VerifyEmail;
