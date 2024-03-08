import React, { FC, ReactElement, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAward } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";

const tabs = [
  "DESCRIPTION",
  "ADDITIONAL INFORMATIONS",
  "SPESIFICATION",
  "REVIEWS",
];

const features = [
  { text: "Free 1 Year Warranty", icon: <FaAward /> },
  { text: "Free Shipping & Fasted Delivery", icon: <MdOutlineLocalShipping /> },
  { text: "100% Money-back guarantee", icon: <MdOutlineHandshake /> },
  { text: "24/7 Customer support", icon: <CiHeadphones /> },
  { text: "Secure payment method", icon: <MdOutlinePayment /> },
];

const shipping = [
  "Courier",
  "Local Shipping",
  "UPS Ground Shipping",
  "Unishop Global Export",
];

const ProductInfo: FC = (): ReactElement => {
  const [activeTab, setActiveTab] = useState("DESCRIPTION");
  return (
    <div className="container mx-auto border rounded-[3px] mt-10 border-gray-200">
      <header className="w-full p-4 flex items-center justify-center">
        <ul className="flex items-center flex-col md:flex-row space-x-2 space-y-4 md:space-y-0">
          {tabs.map((tab) => (
            <li
              onClick={() => setActiveTab(tab)}
              key={uuidv4()}
              className={`${
                activeTab === tab
                  ? "text-gray900 relative after:w-full after:h-[1.5px] after:bg-primary500  after:absolute after:top-[1.49rem] after:sm:top-[2.49rem]  after:left-0"
                  : "text-gray600"
              }  text-base cursor-pointer `}
            >
              {tab}
            </li>
          ))}
        </ul>
      </header>
      <div className="p-6">
        <div className="flex flex-col lg:flex-row  gap-[1rem]">
          <div className="basis-1/2">
            <h3 className="mb-[1rem]">DESCRIPTION</h3>
            <p className="text-sm text-gray600">
              The most powerful MacBook Pro ever is here. With the blazing-fast
              M1 Pro or M1 Max chip — the first Apple silicon designed for pros
              — you get groundbreaking performance and amazing battery life. Add
              to that a stunning Liquid Retina XDR display, the best camera and
              audio ever in a Mac notebook, and all the ports you need. The
              first notebook of its kind, this MacBook Pro is a beast. M1 Pro
              takes the exceptional performance of the M1 architecture to a
              whole new level for pro users.
            </p>
          </div>
          <div className="basis-1/2 flex flex-col sm:flex-row gap-[1rem]">
            <div>
              <h3 className="mb-[1rem]">FEATURE</h3>
              <ul className="">
                {features.map((feature) => (
                  <li key={uuidv4()} className="flex gap-1 items-center">
                    <span className="text-primary500 size-6 ">
                      {feature.icon}
                    </span>
                    <span className="text-[18px]">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-[1rem]">SHIPPING INFORMATION</h3>
              <ul className="">
                {shipping.map((shipping) => (
                  <li key={uuidv4()} className="flex gap-1 items-center">
                    <span className=" ">{shipping}</span>
                    <span className="text-sm text-gray600">test</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
