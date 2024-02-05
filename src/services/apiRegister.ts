import toast from "react-hot-toast";
import { TRegister } from "../types";
export const register = async (data: TRegister): Promise<unknown> => {
  try {
    console.log("data", data);
    const res = await fetch(
      "https://clicon.onrender.com/api/v1/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const responseData = await res.json();
    console.log("response", responseData);
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
