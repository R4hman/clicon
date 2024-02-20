import React, { FC, ReactElement } from "react";
import { DiGitCompare } from "react-icons/di";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { Location, Outlet, useLocation } from "react-router-dom";
import { CgTrack } from "react-icons/cg";
import { MdWorkHistory } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const set = [
  {
    icon: <MdWorkHistory />,
    name: "Order History",
    url: "orders",
  },
  {
    icon: <CgTrack />,
    name: "Track Order",
    url: "track-order",
  },
  {
    icon: <SlBasket />,
    name: "Shopping Cart",
    url: "shopping-card",
  },
  {
    icon: <FaRegHeart />,
    name: "Wishlist",
    url: "wishlist",
  },
  {
    icon: <DiGitCompare />,
    name: "Compare",
    url: "compare",
  },
  {
    icon: <IoSettingsOutline />,
    name: "Setting",
    url: "settings",
  },
];

const ProfileLayout: FC = (): ReactElement => {
  const location: Location = useLocation();
  return (
    <div className="container flex  mx-auto my-10">
      <div className="basis-1/4 p-5 text-gray-500 flex flex-col space-y-5">
        {set.map((item) => (
          <div
            key={uuidv4()}
            className={`w-full ${
              location?.state?.name === item.url
                ? "bg-primary500 text-white"
                : ""
            } text-[16px] flex items-center p-2 gap-x-2 transition-all hover:scale-110`}
          >
            {item.icon}
            <Link to={item.url} state={{ name: item.url }}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="p-5 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
