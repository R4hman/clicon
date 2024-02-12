import ReusableButton from "@/components/reusable/ReusableButton";
import React from "react";
import { GrFavorite } from "react-icons/gr";
import { SlBasket } from "react-icons/sl";

const productInfos = [
  "CustomerFeedback",
  "Price",
  "Sold by",
  "Brand",
  "Model",
  "Stock status",
  "Size",
  "Weight",
];

const CompareProducts: React.FC = () => {
  return (
    <section className="container mx-auto my-10">
      <div>
        <div className="flex items-center rounded-[3px] h-[800px] border border-gray-200">
          <div className="flex h-full  w-full ">
            {/* left side */}
            <div className="basis-1/4 flex items-end border border-r-gray-200 ">
              <div className="flex flex-col w-full">
                {productInfos.map((productInfo, i) => (
                  <div
                    className={`${
                      !((i + 1) % 2) ? "bg-white" : "bg-gray-200"
                    } h-[40px] w-full px-3 py-2`}
                  >
                    {productInfo}
                  </div>
                ))}
              </div>
            </div>
            {/* each product */}
            <div className="basis-1/4 flex  border border-r-gray-200  flex-col ">
              <div className="flex flex-col items-center gap-y-3 py-[19.5px]">
                <span className="border rounded-full w-4 h-4 border-gray-400 p-2 transition-all hover:scale-125 cursor-pointer flex items-center justify-center text-gray-500">
                  ×
                </span>
                <div className="flex flex-col gap-y-3 px-5">
                  <img
                    src="./public/camera.png"
                    alt="compared product photo"
                    className="w-[260px] h-[260px] object-contain"
                  />
                  <h4>
                    Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo
                  </h4>
                  <div className="flex items-center gap-x-3 ">
                    <div className="basis-4/5">
                      <ReusableButton
                        textColor="text-white"
                        bgColor={"bg-primary500"}
                      >
                        ADD TO CARD
                        <SlBasket className="w-5 h-4" />
                      </ReusableButton>
                    </div>
                    <span className="border border-primary500 rounded-[3px] p-4 transition-all hover:scale-105 cursor-pointer text-primary500">
                      <GrFavorite />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div
                  className="bg-gray-200
                   h-[40px] w-full px-3 py-2"
                >
                  <div className="flex items-center gap-x-2">
                    5<span className="text-sm text-gray-400">(51,746,385)</span>
                  </div>
                </div>
                <div
                  className="bg-white
                   h-[40px] w-full px-3 py-2"
                >
                  <div className="flex items-center gap-x-2">
                    5<span className="text-sm text-gray-400">(51,746,385)</span>
                  </div>
                </div>
                <div
                  className="bg-gray-200
                   h-[40px] w-full px-3 py-2"
                >
                  <div className="flex items-center gap-x-2">
                    5<span className="text-sm text-gray-400">(51,746,385)</span>
                  </div>
                </div>
                <div
                  className="bg-white
                   h-[40px] w-full px-3 py-2"
                >
                  <div className="flex items-center gap-x-2">
                    5<span className="text-sm text-gray-400">(51,746,385)</span>
                  </div>
                </div>
                <div
                  className="bg-gray-200
                   h-[40px] w-full px-3 py-2"
                >
                  <div className="flex items-center gap-x-2">
                    5<span className="text-sm text-gray-400">(51,746,385)</span>
                  </div>
                </div>
                <div
                  className="bg-white
                   h-[40px] w-full px-3 py-2"
                >
                  <div className="flex items-center gap-x-2">
                    5<span className="text-sm text-gray-400">(51,746,385)</span>
                  </div>
                </div>
                <div
                  className="bg-gray-200
                   h-[40px] w-full px-3 py-2"
                >
                  <div className="flex items-center gap-x-2">
                    5<span className="text-sm text-gray-400">(51,746,385)</span>
                  </div>
                </div>
                <div
                  className="bg-white
                   h-[40px] w-full px-3 py-2"
                >
                  <div className="flex items-center gap-x-2">
                    5<span className="text-sm text-gray-400">(51,746,385)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareProducts;
