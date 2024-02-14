import { RootState } from "@/app/store";
import IncreaseDecreaseBtn from "@/components/reusable/IncreaseDecreaseBtn";
import ReusableButton from "@/components/reusable/ReusableButton";
import { FC, ReactElement, useMemo } from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";
import { getImage } from "./Wishlist";
import { FaArrowRight } from "react-icons/fa";
import { addOrRemoveBasket } from "@/app/features/basketSlice";
import { useDispatch } from "react-redux";
import { useBasket } from "@/hooks/basket/useBasket";

const calculatePrice = (discountPercent: number, price: number): string => {
  return (
    discountPercent ? price - (price * discountPercent) / 100 : price
  )?.toFixed(1);
};

const ShoppingCard: FC = (): ReactElement => {
  // const basket = useSelector((state: RootState) => state.basket.basket);
  const { data: basket, isLoading } = useBasket();
  const dispatch = useDispatch();

  const subTotal: number = useMemo(
    () =>
      basket?.reduce((acc, curr) => {
        return (
          acc +
          curr.productCount *
            +calculatePrice(curr.discountPercent, curr.salePrice)
        );
      }, 0),
    [basket]
  );

  return (
    <section className="container mx-auto">
      <div className="flex space-x-5 my-10">
        <div className="basis-2/3 border border-gray-200 rounded-[3px]">
          <div className="flex flex-col">
            <header className="text-gray900 text-lg font-semibold py-5 px-4 w-full">
              Shopping Card
            </header>
            <div className="bg-gray-200 flex items-center   py-3 px-6 ">
              <span className="basis-2/5">PRODUCTS</span>
              <span className="basis-1/5 ">PRICE</span>
              <span className="basis-1/5">QUANTITY</span>
              <span className="basis-1/5">SUB-TOTAL</span>
            </div>
          </div>
          <div className="flex flex-col">
            {/* first product */}
            {basket?.map((item) => (
              <div key={item._id} className="flex items-center p-6 ">
                <div className="flex items-center gap-x-3 basis-2/5 ">
                  <span
                    onClick={() => dispatch(addOrRemoveBasket(item))}
                    className="border rounded-full w-4 h-4 border-gray-400 p-2 transition-all hover:scale-125 cursor-pointer flex items-center justify-center text-gray-500"
                  >
                    ×
                  </span>
                  <img
                    className="w-[72px] h-[72px]"
                    src={getImage(item.images)}
                    alt="wishlist product photo"
                  />
                  <h4 className="text-md mr-5 ">{item.name}</h4>
                </div>
                <div className="basis-1/5 text-sm space-x-1  text-gray-400">
                  <span className="line-through">₼{item.salePrice}</span>
                  <span>
                    ₼
                    {/* {item.discountPercent
                      ? item.salePrice -
                        (item.salePrice * item.discountPercent) / 100
                      : item.salePrice} */}
                    {calculatePrice(item.discountPercent, item.salePrice)}
                  </span>
                </div>
                {/* <div
                className={`basis-1/5 ${
                  product.stockCount ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.stockCount ? "IN STOCK" : "OUT OF STOCK"}
              </div> */}
                <div className="basis-1/5">
                  <IncreaseDecreaseBtn product={item} />
                </div>
                <div className="basis-1/5 ">
                  <span>
                    ₼
                    {(
                      item.productCount *
                      (item.discountPercent
                        ? item.salePrice -
                          (item.salePrice * item.discountPercent) / 100
                        : item.salePrice)
                    ).toFixed(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-[1px] max-h-[400px] basis-1/3 border-gray-200 rounded-[3px] p-5">
          <h4 className="mb-5">Order Summary</h4>
          <div className="flex flex-col space-y-3">
            <h4 className="flex items-center justify-between">
              Sub-total <span>₼ {subTotal?.toFixed(1)}</span>
            </h4>
            <h4 className="flex items-center justify-between">
              Shipping <span>Free</span>
            </h4>
            <h4 className="flex items-center justify-between">
              Discount <span>₼30</span>
            </h4>
            <h4 className="flex items-center justify-between">
              Tax <span>₼320</span>
            </h4>
          </div>
          <div className="w-full h-[1.5px] bg-gray-200 my-5"></div>
          <h4 className="flex items-center justify-between mb-5">
            Total <span>₼320</span>
          </h4>
          <ReusableButton
            // bgColor={isSubmitting ? "bg-gray-500" : "bg-primary500"}
            bgColor={"bg-primary500"}
            // disabled={isSubmitting}
            textColor="text-white"
          >
            PLACE ORDER <FaArrowRight />
          </ReusableButton>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCard;
