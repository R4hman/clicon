import toast from "react-hot-toast";
import { TVerifyEmail } from "../../types";
export const verifyEmail = async (data: TVerifyEmail): Promise<unknown> => {
  try {
    console.log("data", data);
    const res = await fetch(
      "https://clicon.onrender.com/api/v1/auth/verify-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Autharization: `Bearer ${data.verificationToken}`,
        },
        body: JSON.stringify(data),
      }
    );
    const responseData = await res.json();
    console.log("response", responseData);
    // if (!res.ok) {
    //   console.log("Res", res);
    //   throw new Error(`HTTP error! Status: ${res.status}, ${responseData.msg}`);
    // }
    return responseData;
  } catch (error: unknown) {
    console.error("Error during registration:", error);
    toast.error(
      typeof error === "string" ? error : (error as { message: string }).message
    );
    throw error;
  }
};
