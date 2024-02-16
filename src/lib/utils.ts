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
