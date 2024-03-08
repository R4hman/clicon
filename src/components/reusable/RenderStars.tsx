import React from "react";
import { FaStar } from "react-icons/fa";

type TRenderStars = {
  rating: number;
};

export const RenderStars: React.FC<TRenderStars> = ({ rating }) => {
  const maxStars = 5; // Maximum number of stars
  const filledStars = Math.min(Math.max(0, rating), maxStars); // Make sure rating is between 0 and maxStars

  return Array.from({ length: maxStars }, (_, index) => (
    <FaStar
      key={index}
      className={`${
        index < filledStars ? "text-[#FAAF00]" : "text-gray-500"
      }  `}
    />
  ));
};
