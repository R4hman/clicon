// import toast from "react-hot-toast";
// import { TLoginUser, TSignUp } from "../../types";
// export const login = async (data: TSignUp): Promise<TLoginUser> => {
//   try {
//     const res = await fetch("https://clicon.onrender.com/api/v1/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify(data),
//       credentials: "include",
//     });
//     const responseData = await res.json();
//     if (!res.ok) {
//       console.log("Res", res);
//       throw new Error(`HTTP error! Status: ${res.status}, ${responseData.msg}`);
//     }
//     return responseData as TLoginUser;
//   } catch (error: unknown) {
//     console.error("Error during registration:", error);
//     toast.error(
//       typeof error === "string" ? error : (error as { message: string }).message
//     );
//     throw error;
//   }
// };
import axios from "axios";
import toast from "react-hot-toast";
import { TLoginUser, TSignUp } from "../../types";

export const login = async (data: TSignUp): Promise<TLoginUser> => {
  try {
    console.log("data", data);
    const response = await axios.post<TLoginUser>(
      `${import.meta.env.VITE_BASE_URL}/v1/auth/login`,
      data,
      {
        withCredentials: true,
      }
    );
    console.log("Response", response.data);
    return response.data;
  } catch (error: unknown) {
    console.error("Error during login:", error);

    if (axios.isAxiosError(error)) {
      // Axios error handling
      if (!error.response) {
        toast.error("Network error. Please check your internet connection.");
      } else {
        const { status, data } = error.response;
        toast.error(
          `HTTP error! Status: ${status}, ${data?.msg || "Unknown error"}`
        );
      }
    } else {
      // Non-Axios error handling
      toast.error(
        typeof error === "string"
          ? error
          : (error as { message: string }).message
      );
    }

    throw error;
  }
};

export const logout = async function () {
  try {
    const response = await fetch(
      "https://clicon.onrender.com/api/v1/auth/logout"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("errror", error);
  }
};
