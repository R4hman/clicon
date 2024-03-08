import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import HeaderBottom from "../../components/HeaderBottom";
import Logo from "../../assets/svg/LogoWarning.svg";
import { Link, Navigation, useNavigate } from "react-router-dom";

import Basket from "@/components/Basket.js";
import Person from "@/components/Person";

const Navbar: React.FC = () => {
  const [inp, setInp] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-secondary700">
        <div className="container    py-5 flex flex-col gap-y-4 sm:flex-row items-center  gap-x-2 md:gap-0 justify-between">
          <Link
            to="/"
            className="order-3 hidden  md:order-1 lg:flex items-center  gap-x-2"
          >
            <img src={Logo} alt="Logo of the webpage" />
            <span className="text-gray0 text-[32px] font-bold">Shopbana</span>
          </Link>
          <div className="rounded-2xl md:w-[500px] w-[400px] order-1 sm:order-2 shadow-navbarUser relative">
            <form>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInp(e.target.value)
                }
                placeholder="Search for anything"
                className="w-full py-3.5 px-5 border-none outline-none"
                type="text"
              />
              <div
                onClick={() => navigate("/shop", { state: { input: inp } })}
                className="w-5 h-5 text-gray900 absolute right-5 top-[14px] cursor-pointer"
              >
                <CiSearch className="w-full h-full" />
              </div>
            </form>
          </div>
          <div className="flex order-2 sm:order-3 items-center gap-x-6">
            <Basket />

            <CiHeart className="text-white w-6 sm:w-8 h-[32px] cursor-pointer" />
            <Person />
          </div>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Navbar;
