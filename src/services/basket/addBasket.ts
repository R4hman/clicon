import { getCookie } from "@/lib/utils";
import toast from "react-hot-toast";
// import { T } from "../../types";
type TAddBasket = {
  productId: string;
  count: number;
};
export const addBasket = async (data: TAddBasket) => {
  try {
    const token = getCookie("refreshToken");
    console.log("data", data);
    console.log("    token", token);
    const res = await fetch("https://clicon.onrender.com/api/v1/basketItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    console.log("responseData", responseData);
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
