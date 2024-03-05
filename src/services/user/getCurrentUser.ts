import { getCookie } from "@/lib/utils";
import toast from "react-hot-toast";

export const getCurrentUser = async (): Promise<unknown> => {
  try {
    const token = getCookie("accessToken");

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/v1/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });
    const data = await res.json();

    if (!res.ok) {
      console.log("Res", res);
      throw new Error(`HTTP error! Status: ${res.status}, ${data.msg}`);
    }

    console.log("data", data);

    return data;
  } catch (error: unknown) {
    console.error("Error getting user", error);
    toast.error(
      typeof error === "string" ? error : (error as { message: string }).message
    );
    throw error;
  }
};
