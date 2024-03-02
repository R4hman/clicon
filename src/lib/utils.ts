import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImage = (arr: any[]): string => {
  const image = arr.find((item) => item.imageStatus);

  return image.imageUrl;
};

export const calculatePrice = (
  discountPercent: number,
  price: number
): string => {
  return (
    discountPercent ? price - (price * discountPercent) / 100 : price
  )?.toFixed(1);
};

export function setCookie(
  name: string,
  value: string,
  daysToExpire: number
): void {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;

  document.cookie = cookieString;
}

// export function getCookie(name: string): string | null {
//   console.log("document.cookie", document.cookie);
//   const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
//   console.log("cookies", cookies);

//   for (const cookie of cookies) {
//     const [cookieName, cookieValue] = cookie.split("=");

//     if (cookieName === name) {
//       return decodeURIComponent(cookieValue);
//     }
//   }

//   return null;
// }

export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(";").map((cookie) => cookie.trim());

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");

    // Check for matching cookie name (case-sensitive)
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }

  return null; // Cookie not found
}
