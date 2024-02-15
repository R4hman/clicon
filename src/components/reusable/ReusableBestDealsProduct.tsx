import { CSSProperties, FC, ReactElement, ReactNode } from "react";
import ShopNowBtn from "./ShopNowBtn";

type TReusableBestDealsProduct = {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  bgColor?: string;
  color?: string;
};

type TReusableBestDealsContent = {
  color?: string;
  slider: {
    headTitle: string;
    title: string;
  };
};

type TReusableBestDealsImg = {
  slider: {
    image: string;
  };
};

const ReusableBestDealsProduct: FC<TReusableBestDealsProduct> & {
  ReusableBestDealsContent: FC<TReusableBestDealsContent>;
  ReusableBestDealsImg: FC<TReusableBestDealsImg>;
} = ({ children, style, className, bgColor, color }): ReactElement => {
  return (
    <div
      style={style}
      className={`${bgColor ? bgColor : "bg-gray900"}

       flex  rounded-[3px] pl-6 pt-6 overflow-hidden min-h-[248px]`}
    >
      {children}
    </div>
  );
};

const ReusableBestDealImg: FC<TReusableBestDealsImg> = ({
  slider,
}): ReactElement => {
  return <img src={slider.image} alt="" />;
};

const ReusableBestDealContent: FC<TReusableBestDealsContent> = ({
  slider,
  color,
}): ReactElement => {
  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-warning500 text-sm font-medium">
        {slider.headTitle}
      </span>
      <h6
        className={`text-[24px] font-semibold
      ${color ? color : "text-white"}
      `}
      >
        {slider.title}
      </h6>
      <ShopNowBtn />
    </div>
  );
};

ReusableBestDealsProduct.ReusableBestDealsContent = ReusableBestDealContent;
ReusableBestDealsProduct.ReusableBestDealsImg = ReusableBestDealImg;

export default ReusableBestDealsProduct;
