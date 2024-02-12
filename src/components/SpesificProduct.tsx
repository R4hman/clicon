import React, { useEffect, useState } from "react";
import FeaturedProducts from "./FeaturedProducts";
import BestDeals from "./BestDeals";
import ShopNowBtn from "./reusable/ShopNowBtn";
import { useProducts } from "@/hooks/useProducts";
import { useLocation, useSearchParams } from "react-router-dom";
import { TProduct } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import SpesificProductSkeleton from "./Skeletons/SpesificProductSkeleton";

export type TProductNames = {
  name: string;
  url: string;
};

const SpesificProduct: React.FC = () => {
  // const [url, setUrl] = useState<string>(
  //   "https://clicon.onrender.com/api/v1/products"
  // );
  const [products, setProducts] = useState<TProduct[]>([]);
  const { data, isLoading } = useProducts(
    "https://clicon.onrender.com/api/v1/products"
  );

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");

  // useEffect(() => {
  //   setUrl(`http://localhost:3000/products${location.search}`);
  // }, [location.search]);

  const featuredProducts: TProduct[] = data?.products?.filter(
    (item) => item.isFeature
  );

  useEffect(() => {
    setProducts(
      featuredProducts?.filter((item) => {
        if (category) {
          return item.categoryId.name === category;
        } else {
          return item;
        }
      })
    );
  }, [category]);

  if (isLoading) {
    return (
      <div className="flex items-center gap-x-4">
        <div className="flex w-[570px] bg-white flex-col  gap-y-4">
          <div className="px-4 space-y-4">
            <Skeleton className="h-12 w-full rounded-md  bg-slate-200" />
            <Skeleton className="h-16 w-full rounded-md  bg-slate-200" />
            <Skeleton className="h-8 w-full rounded-md bg-slate-200" />
          </div>
          <div className="flex items-center gap-x-2">
            <Skeleton className="h-8 w-full rounded-sm bg-slate-200" />
            <Skeleton className="h-12 w-full rounded-sm bg-slate-200" />
          </div>
          <div className="px-8">
            <Skeleton className="h-14 w-full rounded-md bg-slate-200 " />
          </div>
          <Skeleton className="h-[300px] w-full rounded-md bg-slate-200" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-[250px] bg-slate-200 rounded-lg" />
            <div className="flex items-center gap-x-2">
              <Skeleton className="h-8 w-[70px] rounded-md bg-slate-200" />
              <Skeleton className="h-8 w-[70px] rounded-md bg-slate-200" />
              <Skeleton className="h-8 w-[70px] rounded-md bg-slate-200" />
              <Skeleton className="h-8 w-[70px] rounded-md bg-slate-200" />
              <Skeleton className="h-8 w-[70px] rounded-md bg-slate-200" />
            </div>
          </div>
          <div className="flex flex-wrap mt-6  gap-4 items-center">
            <div>
              <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-200" />
              <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-200" />
            </div>
            <div>
              <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-200" />
              <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-200" />
            </div>
            <div>
              <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-200" />
              <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-200" />
            </div>
            <div>
              <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-200" />
              <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-200" />
            </div>
            <div>
              <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-200" />
              <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-200" />
            </div>
            <div>
              <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-200" />
              <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-200" />
            </div>
            <div>
              <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-200" />
              <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-200" />
            </div>
            <div>
              <Skeleton className="w-[216px] h-[200px] rounded-sm bg-slate-200" />
              <Skeleton className="w-[70px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[216px] h-6 rounded-md mt-2 bg-slate-200" />
              <Skeleton className="w-[80px] h-6 rounded-md mt-2 bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }

  const productNames: TProductNames[] = [
    { name: "All Products", url: "" },
    { name: "Smartphone", url: "?category=SmartPhone" },
    { name: "Computer & Laptop", url: "?category=Computer & Laptop" },
    { name: "Headphone", url: "?category=headphone" },
    { name: "TV", url: "?category=tv" },
  ];

  return (
    <section>
      <FeaturedProducts
        data={products || featuredProducts}
        sectionTitle={"Featured Products"}
        productNames={productNames}
      >
        <article className="w-[300px] rounded-[3px] bg-warning300">
          <div className="px-3 py-4">
            <span className="text-sm text-danger600 mt-2 text-center block font-semibold">
              COMPUTER & ACCESSORIES
            </span>
            <h3 className="text-[32px]  text-center my-3 font-semibold leading-10 text-gray900">
              32% Discount
            </h3>
            <p className="text-gray700 text-center my-4 text-[16px] font-normal">
              For all ellectronics products
            </p>
            <p className="text-sm text-gray900 mt-3 mb-6 font-medium">
              Offers ends in:
              <span className="ml-2 text-sm font-semibold text-gray900 rounded-[2px] bg-gray-100 px-3 py-1.5">
                ENDS OF CHRISTMAS
              </span>
            </p>
            <div className="flex items-center justify-center">
              <ShopNowBtn />
            </div>
          </div>
          <img src="public/Image.jpg" alt="" />
        </article>
      </FeaturedProducts>
    </section>
  );
};

export default SpesificProduct;
