import React from "react";
import { SlBasket } from "react-icons/sl";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SmallProductCard from "./SmallProductCard";

import { TProduct } from "@/types";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useAppSelector } from "@/app/hooks";
import { useBasket } from "@/hooks/basket/useBasket";
import { useAddBasket } from "@/hooks/basket/useAddBasket";
import { useDeleteBasket } from "@/hooks/basket/useDeleteBasket";

const Basket: React.FC = () => {
  const { data: basket, isLoading } = useBasket();
  const { mutate, isPending } = useAddBasket();
  const { mutate: deleteBasket, isPending: deletePending } = useDeleteBasket();

  // const basket = useAppSelector((state) => state.basket.basket);
  // const totalPrice = basket.reduce((acc, curr) => {
  //   const price =
  //     curr.productCount *
  //     (curr.discountPercent
  //       ? curr.salePrice - (curr.salePrice * curr.discountPercent) / 100
  //       : curr.salePrice);
  //   return acc + price;
  // }, 0);

  // const basketLength = basket.reduce((acc, curr) => {
  //   return acc + curr.productCount;
  // }, 0);

  const basketLength = basket?.basketItems.length || 0;

  return (
    <Popover>
      <PopoverTrigger>
        <div className="relative cursor-pointer">
          <SlBasket className="text-white w-8 h-[32px] " />
          <span className=" flex items-center justify-center absolute -top-[4px]  -right-[6px] w-5 h-5 bg-white rounded-full ">
            {basketLength}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-white p-0 py-3">
        <h4 className="border-b border-gray100 text-[16px] leading-6 font-medium px-4 pb-3 text-gray900">
          Shopping Cart
          <span className="ml-1.5 text-gray600">({basketLength})</span>
        </h4>
        <div>
          {basket?.basketItems?.map((product: TProduct) => (
            <SmallProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="flex align-center justify-between p-4">
          <span className="text-sm text-gray700 font-normal">Sub-total:</span>
          <span className="text-sm text-gray900 font-medium">
            ₼ {basket?.totalAmount}
          </span>
        </div>
        <div className="px-4 mb-3">
          <Link
            // style={{ color: "red" }}
            className="uppercase bg-primary500 transition-all hover:scale-105  py-3.5 flex items-center gap-1 justify-center text-white"
            to="/checkout"
          >
            Checkout Now
            <FaArrowRight />
          </Link>
        </div>
        <div className="px-4">
          <Link
            className="uppercase border border-warning200 text-primary500  transition-all hover:scale-105 py-3.5 flex items-center gap-1 justify-center"
            to="/shopping-card"
          >
            VIEW Cart
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Basket;
