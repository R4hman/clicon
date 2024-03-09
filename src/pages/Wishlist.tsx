import { RootState } from "@/app/store";
import ReusableButton from "@/components/reusable/ReusableButton";
import React from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";
import { getImage } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { useAddBasket } from "@/hooks/basket/useAddBasket";
import { useDeleteBasket } from "@/hooks/basket/useDeleteBasket";
import CustomBasketHook from "@/hooks/basket/CustomBasketHook";
import { useDispatch } from "react-redux";
import { addOrRemoveFavorites } from "@/app/features/favoriteSlice";

const Wishlist: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.favorites.favorites);
  const dispatch = useDispatch();
  const { mutate, isPending } = useAddBasket();

  const handleAddBasket = (data: TProduct): void => {
    mutate({ productId: data._id, count: 1 });
    dispatch(addOrRemoveFavorites(data));
  };

  return (
    <section className="container px-0 py-0 mx-auto my-7  border border-gray-200 rounded-[3px]">
      <div className="flex flex-col">
        <header className="text-gray900 text-lg font-semibold py-5 px-4 w-full">
          Wishlist
        </header>
        <div className="bg-gray-200 flex items-center   py-3 px-6 ">
          <span className="basis-2/5">PRODUCTS</span>
          <span className="basis-1/5 ">PRICE</span>
          <span className="basis-1/5">STOCK STATUS</span>
          <span className="basis-1/5">ACTIONS</span>
        </div>
        <div className="flex flex-col">
          {/* first product */}

          {wishlist.map((product) => (
            <div key={product._id} className="flex items-center p-6 ">
              <div className="flex items-center gap-x-3 basis-2/5 ">
                <img
                  className="w-[72px] h-[72px]"
                  src={getImage(product.images)}
                  alt="wishlist product photo"
                />
                <h4 className="text-md mr-5 ">{product.name}</h4>
              </div>
              <div className="basis-1/5 text-sm space-x-1  text-gray-400">
                <span className="line-through">₼{product.salePrice}</span>
                <span>
                  ₼
                  {product.discountPercent
                    ? product.salePrice -
                      (product.salePrice * product.discountPercent) / 100
                    : product.salePrice}
                </span>
              </div>
              <div
                className={`basis-1/5 ${
                  product.stockCount ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.stockCount ? "IN STOCK" : "OUT OF STOCK"}
              </div>
              <div className="basis-1/5 flex items-center gap-x-5">
                <div className="basis-4/5">
                  <ReusableButton
                    onClick={() => handleAddBasket(product)}
                    textColor="text-white"
                    bgColor={"bg-primary500"}
                  >
                    ADD TO CARD
                    <SlBasket className="w-5 h-4" />
                  </ReusableButton>
                </div>
                <span
                  onClick={() => dispatch(addOrRemoveFavorites(product))}
                  className="border rounded-full w-4 h-4 border-gray-400 p-2 transition-all hover:scale-125 cursor-pointer flex items-center justify-center text-gray-500"
                >
                  ×
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
