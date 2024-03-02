import { getCookie } from "@/lib/utils";
import toast from "react-hot-toast";
export const getAllBasket = async (): Promise<unknown> => {
  try {
    const token = getCookie("accessToken");

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/v1/basketItems`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
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
