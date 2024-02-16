import React from "react";
import ShopNowBtn from "./ShopNowBtn";

type TProductInfo = {
  info: string;
  productName: string;
  children: React.ReactNode;
  bgColor: "blue" | "yellow";
  mainColor: string;
  textColor: string;
  url: string;
};

const ProductInfo: React.FC<TProductInfo> = ({
  info,
  productName,
  bgColor,
  children,
  mainColor,
  textColor,
  url,
}) => {
  const color = bgColor === "blue" ? "bg-secondary500" : "bg-warning400";

  return (
    <div
      className={`flex items-center p-[44px] space-x-2 rounded-[4px] ${mainColor}`}
    >
      <div className="flex flex-col gap-y-5">
        <span className={`${color} w-fit p-1.5 rounded-[2px]`}>{info}</span>
        <h3 className={`${textColor}`}>{productName}</h3>
        <p className={`${textColor}`}>{children}</p>
        <ShopNowBtn />
      </div>
      <img
        className="object-fit w-[200px] h-[200px]"
        src={url}
        alt="commercial image"
      />
    </div>
  );
};

export default ProductInfo;
