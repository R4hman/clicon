import { addOrRemoveCompare } from "@/app/features/compareSlice";
import { RootState } from "@/app/store";
import ReusableButton from "@/components/reusable/ReusableButton";
import { calculatePrice, getImage } from "@/lib/utils";
import React from "react";
import { GrFavorite } from "react-icons/gr";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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
  const compare = useSelector((state: RootState) => state.compare.compare);
  const dispatch = useDispatch();

  console.log("compare", compare);
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
            {compare.map((item) => (
              <div
                key={item._id}
                className="basis-1/4 flex  border border-r-gray-200  flex-col "
              >
                <div className="flex flex-col   h-full items-center gap-y-3 py-[19.5px]">
                  <span
                    onClick={() => dispatch(addOrRemoveCompare(item))}
                    className="border rounded-full w-4 h-4 border-gray-400 p-2 transition-all hover:scale-125 cursor-pointer flex items-center justify-center text-gray-500"
                  >
                    ×
                  </span>
                  <div className="flex flex-col gap-y-3 px-5">
                    <img
                      src={getImage(item.images)}
                      alt="compared product photo"
                      className="w-[260px] h-[260px] object-contain"
                    />
                    <h4>{item.name}</h4>
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
                      5
                      <span className="text-sm text-gray-400">
                        (51,746,385)
                      </span>
                    </div>
                  </div>
                  <div
                    className="bg-white
                    h-[40px] w-full px-3 py-2"
                  >
                    <div className="flex items-center gap-x-2 text-secondary500">
                      ₼{calculatePrice(item.discountPercent, item.salePrice)}
                    </div>
                  </div>
                  <div
                    className="bg-gray-200
                    h-[40px] w-full px-3 py-2"
                  >
                    <div className="flex items-center gap-x-2">
                      {item.brandId.name}
                    </div>
                  </div>
                  <div
                    className="bg-white
                    h-[40px] w-full px-3 py-2"
                  >
                    <div className="flex items-center gap-x-2">
                      {item.brandId.name}
                    </div>
                  </div>
                  <div
                    className="bg-gray-200
                    h-[40px] w-full px-3 py-2"
                  >
                    <div className="flex items-center gap-x-2 text-[13px] ">
                      {item.name}
                    </div>
                  </div>
                  <div
                    className="bg-white
                    h-[40px] w-full px-3 py-2"
                  >
                    <div
                      className={`flex items-center gap-x-2 ${
                        item.stockCount ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.stockCount ? "IN STOCK" : "OUT OF STOCK"}
                    </div>
                  </div>
                  <div
                    className="bg-gray-200
                    h-[40px] w-full px-3 py-2"
                  >
                    <div className="flex items-center gap-x-2">
                      5
                      <span className="text-sm text-gray-400">
                        (51,746,385)
                      </span>
                    </div>
                  </div>
                  <div
                    className="bg-white
                    h-[40px] w-full px-3 py-2"
                  >
                    <div className="flex items-center gap-x-2">
                      5
                      <span className="text-sm text-gray-400">
                        (51,746,385)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareProducts;
