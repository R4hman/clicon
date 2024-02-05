import React, { memo } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

type TShopNowBtn = {
  fullWidth?: boolean;
};

const ShopNowBtn: React.FC<TShopNowBtn> = memo(({ fullWidth }) => {
  return (
    <Link
      className={` ${fullWidth ? "w-full" : ""}
      bg-primary500  flex text-white uppercase py-3 rounded-[3px] w-[191px] items-center justify-center gap-x-1 hover:scale-105 transition-all
      `}
      to="/shopping"
    >
      Shop Now
      <FaArrowRight />
    </Link>
  );
});

export default ShopNowBtn;
