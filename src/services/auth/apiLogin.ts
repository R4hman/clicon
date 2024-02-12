import toast from "react-hot-toast";
import { TSignUp } from ".";
export const login = async (data: TSignUp): Promise<unknown> => {
  try {
    const res = await fetch("https://clicon.onrender.com/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    if (!res.ok) {
      console.log("Res", res);
      throw new Error(`HTTP error! Status: ${res.status}, ${responseData.msg}`);
    }
    return responseData;
  } catch (error: unknown) {
    console.error("Error during registration:", error);
    toast.error(error);
    throw error;
  }
};