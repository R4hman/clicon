import React from "react";
import { IoLocationOutline } from "react-icons/io5";

import { CiHeadphones } from "react-icons/ci";
import { DiGitCompare } from "react-icons/di";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";

import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

const sets = [
  {
    icon: <IoLocationOutline />,
    url: "",
    name: "Track Order",
  },
  {
    icon: <DiGitCompare />,
    url: "/compare",
    name: "Compare",
  },
  {
    icon: <CiHeadphones />,
    url: "",
    name: "Custom Support",
  },
  {
    icon: <CiCircleInfo />,
    url: "",
    name: "Need Help",
  },
];

const HeaderBottom: React.FC = () => {
  return (
    <div className=" border-b border-gray100 h-auto ">
      <nav className="container  mx-auto flex items-center justify-between py-4 ">
        {/* Left side */}
        <div className="flex flex-col sm:flex-row  sm:items-center justify-between ">
          <div className="text-gray900 order-2 sm:order-1 bg-gray-50 text-sm font-medium flex items-center gap-x-2 py-3.5 px-6">
            <MenuBar />
          </div>
          <div className="flex items-center order-1 sm:order-2 gap-x-6 ">
            {sets.map((item) => (
              <div
                className="flex items-center justify-center gap-x-[2px] cursor-pointer"
                key={uuidv4()}
              >
                <span className="w-4 h-4 text-gray-600 ">{item.icon}</span>
                <span className="text-xs md:text-sm text-gray-600">
                  <Link to={item.url}>{item.name}</Link>
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Right side */}
        <div className="hidden lg:block">
          <Link className="flex items-center gap-2" to={"tel:8882192787"}>
            <FaPhoneVolume />
            +9948882192787
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderBottom;
