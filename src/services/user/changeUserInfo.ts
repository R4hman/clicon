import toast from "react-hot-toast";
import { TChangeUserInfo } from "../../types";
import { getCookie } from "@/lib/utils";
export const changeUserInfo = async (
  data: TChangeUserInfo
): Promise<unknown> => {
  try {
    const token = getCookie("accessToken");
    console.log("data", data);
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/v1/users/update/me`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    const responseData = await res.json();
    console.log("response", responseData);
    if (!res.ok) {
      console.log("Res", res);
      throw new Error(`HTTP error! Status: ${res.status}, ${responseData.msg}`);
    }
    toast.success(responseData.msg);
    return responseData;
  } catch (error) {
    console.error("Error during registration:", error);
    toast.error(
      typeof error === "string" ? error : (error as { message: string }).message
    );
    throw error;
  }
};
