import React from "react";
import { CiTrophy } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { CiHeadphones } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { TProduct } from "@/types";
import { v4 as uuidv4 } from "uuid";

// type TFeatures = Omit<TProduct, "img" | "price"> & {
//   icon: JSX.Element;
//   title: string;
// };
type TFeatures = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
};

const sets: TFeatures[] = [
  {
    icon: <CiDeliveryTruck className="w-10 h-10" />,
    title: "FASTED DELIVERY",
    subtitle: "Delivery in 24/H",
  },
  {
    icon: <CiTrophy className="w-10 h-10" />,
    title: "24HOURS RETURN",
    subtitle: "100% money back guarantee",
  },
  {
    icon: <MdPayment className="w-10 h-10" />,
    title: "Secure payment",
    subtitle: "Your money is safe",
  },
  {
    icon: <CiHeadphones className="w-10 h-10" />,
    title: "Support 24/7",
    subtitle: "Live contact/message",
  },
];

const Features: React.FC = () => {
  return (
    <div className="flex mx-8 justify-between items-center rounded-[6px] border border-gray100 p-4">
      {sets.map((item: TFeatures) => (
        <div
          className="flex flex-col  h-[150px] lg:h-fit  gap-y-8 md:flex-row  gap-x-8 px-4 sm:px-6 md:px-8 border-r border-gray100"
          key={uuidv4()}
        >
          <div className="w-2 h-2 sm:w-4 sm:h-4">{item.icon}</div>
          <div className="flex flex-col gap-y-1">
            <span className="text-gray900 font-medium text-xs sm:text-sm">
              {item.title}
            </span>
            <span className="text-gray600 font-normal text-xs  sm:text-sm">
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
