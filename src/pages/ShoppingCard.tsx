import ReusableButton from "@/components/reusable/ReusableButton";
import { FC, ReactElement } from "react";
import { SlBasket } from "react-icons/sl";

const ShoppingCard: FC = (): ReactElement => {
  return (
    <section className="container mx-auto">
      <div className="flex  my-10">
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
            <div className="flex items-center p-6 ">
              <div className="flex items-center gap-x-3 basis-2/5 ">
                <img
                  className="w-[72px] h-[72px]"
                  //   src={getImage(product.images)}
                  alt="wishlist product photo"
                />
                <h4 className="text-md mr-5 ">name</h4>
              </div>
              <div className="basis-1/5 text-sm space-x-1  text-gray-400">
                <span className="line-through">₼</span>
                <span>₼</span>
              </div>
              {/* <div
                className={`basis-1/5 ${
                  product.stockCount ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.stockCount ? "IN STOCK" : "OUT OF STOCK"}
              </div> */}
              <div>In stock</div>
              <div className="basis-1/5 flex items-center gap-x-5">
                <div className="basis-4/5">
                  <ReusableButton
                    textColor="text-white"
                    bgColor={"bg-primary500"}
                  >
                    ADD TO CARD
                    <SlBasket className="w-5 h-4" />
                  </ReusableButton>
                </div>
                <span className="border rounded-full w-4 h-4 border-gray-400 p-2 transition-all hover:scale-125 cursor-pointer flex items-center justify-center text-gray-500">
                  ×
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/3"></div>
      </div>
    </section>
  );
};

export default ShoppingCard;
