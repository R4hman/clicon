// import { getCookie } from "@/lib/utils";
// import toast from "react-hot-toast";
// // import { T } from "../../types";
// type TAddBasket = {
//   productId: string;
//   count: number;
// };
// export const addBasket = async (data: TAddBasket) => {
//   try {
//     const token = getCookie("refreshToken");
//     console.log("data", data);
//     console.log("    token", token);
//     const res = await fetch("https://clicon.onrender.com/api/v1/basketItems", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${getCookie("accessToken")}`,
//       },
//       credentials: "include",
//       body: JSON.stringify(data),
//     });
//     const responseData = await res.json();
//     console.log("responseData", responseData);
//     if (!res.ok) {
//       console.log("Res", res);
//       throw new Error(`HTTP error! Status: ${res.status}, ${responseData.msg}`);
//     }
//     return responseData;
//   } catch (error: unknown) {
//     console.error("Error during registration:", error);
//     toast.error(
//       typeof error === "string" ? error : (error as { message: string }).message
//     );
//     throw error;
//   }
// };

import { getCookie } from "@/lib/utils";
import toast from "react-hot-toast";
type TAddBasket = {
  productId: string;
  count: number;
};
export const addBasket = async (data: TAddBasket) => {
  try {
    const token = getCookie("accessToken");

    if (!token) {
      throw new Error("Authentication token not found.");
    }

    const response = await fetch(
      "https://clicon.onrender.com/api/v1/basketItems",
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
