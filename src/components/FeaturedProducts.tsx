import { TProduct } from "@/types";
import React from "react";
import { TProductNames } from "./SpesificProduct";
import ProductCard from "./reusable/ProductCard";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

type TFeaturedProducts = {
  children: React.ReactNode;
  data: Record<string, TProduct[]> | TProduct[];
  sectionTitle: string;
  productNames: TProductNames[];
};

const FeaturedProducts: React.FC<TFeaturedProducts> = ({
  children,
  data,
  sectionTitle,
  productNames,
}) => {
  const location = useLocation();

  const productList = Array.isArray(data)
    ? data.slice(0, 8)
    : data && Object.values(data).flat().slice(0, 8);

  return (
    <section className="flex gap-x-4  ">
      <aside>{children}</aside>
      <div className="w-full ">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="text-[24px] font-semibold leading-8">
              {sectionTitle}
            </h3>
            <nav className="flex items-center gap-x-2">
              {productNames.map((item) => (
                <Link
                  key={uuidv4()}
                  className={`${
                    location.search === item.url
                      ? "text-gray900 text-sm relative after:w-full  after:bg-primary500  after:absolute after:left-0 after:top-[30px] after:p-[1px]"
                      : "text-gray600 text-sm"
                  }`}
                  to={item.url}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-wrap mt-6  gap-4 items-center">
            {productList?.slice(0, 8).map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
