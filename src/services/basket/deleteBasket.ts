import { getCookie } from "@/lib/utils";
import toast from "react-hot-toast";

export const deleteBasket = async (id: string) => {
  try {
    // Log the id
    console.log("id", id);

    // Retrieve the access token from the cookie
    const token = getCookie("accessToken");

    // If the token is not found, log an error and throw an exception
    if (!token) {
      console.log("token", token);
      throw new Error("Authentication token not found.");
    }

    // Make a DELETE request to delete the basket item
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/v1/basketItems/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // credentials: "include",
        // body: JSON.stringify(id),
      }
    );

    // Parse the JSON response
    const responseData = await response.json();
    console.log("responseData", responseData);

    // If the response status is not OK, throw an error with details from the response
    if (!response.ok) {
      throw new Error(
        `Failed to delete basket item. Status: ${response.status}, Message: ${responseData.msg}`
      );
    }

    // Return the response data if successful
    return responseData;
  } catch (error) {
    // Log the error
    console.error("Error during basket deletion:", error);

    // Display an error toast message
    toast.error(
      typeof error === "string" ? error : (error as { message: string }).message
    );

    // Re-throw the error for further handling
    throw error;
  }
};
