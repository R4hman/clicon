import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { TProduct, TData } from "@/types";
import SmallProductCard from "./SmallProductCard";
import { useCategories } from "@/hooks/useCategories";
import ShopNowBtn from "./reusable/ShopNowBtn";

const MenuBar: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { data, isLoading } = useCategories("http://localhost:3000/categories");
  // const { data, isLoading } = useCategories("https://clicon.onrender.com/api/v1/categories");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger
          className={`${
            clicked ? "bg-primary500 text-white" : ""
          } flex items-center gap-2`}
          onClick={() => setClicked((prev) => !prev)}
        >
          All Category
          <span>{clicked ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </MenubarTrigger>
        <MenubarContent className="bg-white">
          {isLoading && <div>loading...</div>}
          {!isLoading &&
            data?.map((item: TData) => {
              if (item.subcategories) {
                return (
                  <MenubarSub key={uuidv4()}>
                    <MenubarSubTrigger className="hover:bg-gray100 cursor-pointer">
                      <Link to={item.url}>{item.name}</Link>
                    </MenubarSubTrigger>
                    <MenubarSubContent className="-ml-56 sm:ml-0 md:ml-6 w-[468px] lg:w-[868px] bg-white p-5 flex flex-row flex-wrap lg:flex-nowrap gap-x-2 mt-[200px] lg:-mt-[68px]">
                      <div className="basis-1/8">
                        {item.subcategories.map((cat) => (
                          <MenubarItem
                            className="hover:bg-gray100 w-[100px] cursor-pointer "
                            key={uuidv4()}
                          >
                            <Link to={`${item.url}/${cat}`}>{cat}</Link>
                          </MenubarItem>
                        ))}
                      </div>
                      <div className="lg:basis-1/2 basis-1/3 ">
                        <h3 className="text-sm font-semibold mb-4">
                          FEATURED PHONES
                        </h3>
                        <div className="flex flex-col gap-y-4 w-[300px]  ">
                          {item.products
                            ?.slice(0, 3)
                            ?.map((product: TProduct) => (
                              <SmallProductCard
                                key={uuidv4()}
                                product={product}
                              />
                            ))}
                        </div>
                      </div>
                      <div className="w-full bg-warning200 rounded-sm p-8 flex items-center flex-col">
                        <img src={item.mainDiscount?.img} alt="" />
                        <h4 className="text-gray900 text-[28px] font-semibold">
                          {item.mainDiscount?.title}
                        </h4>
                        <p className="text-gray700 font-normal text-[16px] leading-4 text-center mb-4">
                          {item.mainDiscount?.subtitle}
                        </p>
                        <span className="mb-6 text-sm text-gray700 flex items-center gap-x-4">
                          Starting Price:
                          <span className="bg-white px-3 py-1.5 text-[16px] font-semibold leading-6 text-gray900  ">
                            ${item.mainDiscount?.price} USD
                          </span>
                        </span>

                        <div className="w-full">
                          <ShopNowBtn fullWidth />
                        </div>
                      </div>
                    </MenubarSubContent>
                  </MenubarSub>
                );
              } else {
                return (
                  <MenubarItem
                    className="hover:bg-gray100  cursor-pointer"
                    key={uuidv4()}
                  >
                    <Link to={item.url}>{item.name}</Link>
                  </MenubarItem>
                );
              }
            })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuBar;
