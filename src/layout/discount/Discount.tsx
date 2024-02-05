import React from "react";
import { FaXmark } from "react-icons/fa6";

interface StateDiscount {
  setDiscount: (type: boolean) => void;
}

const Discount: React.FC<StateDiscount> = ({ setDiscount }) => {
  return (
    <main className="flex items-center justify-end flex-wrap sm:flex-nowrap  bg-gray900 px-6 py-3 sm:py-[18px] gap-y-1">
      <section className="container mx-auto flex flex-wrap gap-3 items-center justify-center sm:justify-between">
        <nav className="flex items-center gap-3">
          <p className="text-xs sm:text-xl font-semibold bg-warning300 py-[6px] px-[10px] rotate-[-3deg]">
            Black
          </p>
          <span className="text-sm sm:text-2xl font-semibold text-gray0">
            Friday
          </span>
        </nav>
        <nav className="flex items-center gap-2">
          <span className="text-gray0 font-medium text-sm">Up to</span>
          <span className="text-warning500 font-semibold  text-2xl sm:text-[40px]">
            59%
          </span>
          <span className="text-gray0 font-semibold text-sm sm:text-xl">
            OFF
          </span>
        </nav>
        <nav>
          <button className="flex items-center gap-1 sm:gap-2 px-2 sm:px-6 py-2 sm:py-3 rounded-sm bg-warning500 text-gray900 text-xs sm:text-sm font-bold tracking-wide uppercase">
            SHOP NOW
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </nav>
      </section>
      <button
        onClick={() => setDiscount(false)}
        className="rounded-sm text-gray0 bg-gray800 p-2 order-[-1] sm:order-1 ml-1"
      >
        {/* <img src={xmark} alt="Xmark" /> */}
        <FaXmark />
      </button>
    </main>
  );
};

export default Discount;
