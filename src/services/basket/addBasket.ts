import { getCookie } from "@/lib/utils";
import toast from "react-hot-toast";
type TAddBasket = {
  productId: string;
  count: number;
};
export const addBasket = async (data: TAddBasket) => {
  try {
    console.log("data", data);
    const token = getCookie("accessToken");

    if (!token) {
      console.log("token", token);
      throw new Error("Authentication token not found.");
    }

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/v1/basketItems`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        `Failed to add to basket. Status: ${response.status}, Message: ${responseData.msg}`
      );
    }

    return responseData;
  } catch (error) {
    console.error("Error during basket addition:", error);
    toast.error(
      typeof error === "string" ? error : (error as { message: string }).message
    );
    throw error;
  }
};
