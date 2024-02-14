import toast from "react-hot-toast";
import { TSignUp } from "../../types";
export const getAllBasket = async (): Promise<unknown> => {
  try {
    const res = await fetch("https://clicon.onrender.com/api/v1/basketItems");
    const responseData = await res.json();
    if (!res.ok) {
      console.log("Res", res);
      throw new Error(`HTTP error! Status: ${res.status}, ${responseData.msg}`);
    }
    return responseData;
  } catch (error: unknown) {
    console.error("Error during registration:", error);
    toast.error(
      typeof error === "string" ? error : (error as { message: string }).message
    );
    throw error;
  }
};
