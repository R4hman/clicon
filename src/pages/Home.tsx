import React from "react";
import Sales from "../components/Sales";
import Features from "../components/Features";
import BestDeals from "../components/BestDeals";
import ShopWithCategories from "../components/ShopWithCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import SpesificProduct from "../components/SpesificProduct";
import ProductInfo from "../components/reusable/ProductInfo";
import { Skeleton } from "@/components/ui/skeleton";
import SubscribeNewsletter from "@/components/SubscribeNewsletter";

const Home: React.FC = () => {
  return (
    <>
      <section className="container mx-auto p-0">
        <Sales />
        <Features />
        <BestDeals />
        <ShopWithCategories />
        <SpesificProduct />
        <section className="flex flex-col sm:flex-row space-y-5  items-center  gap-x-6">
          <ProductInfo
            productName="
                New Apple
                Homepod Mini
                   "
            info="INTRODUCING"
            bgColor="blue"
            mainColor="bg-[#F2F4F5]"
            textColor="text-gray900"
            url="./public/homepod.png"
          >
            Jam-packed with innovation, HomePod mini delivers unexpectedly.
          </ProductInfo>
          <ProductInfo
            productName="
              Xiaomi Mi 11 Ultra
              12GB+256GB
             "
            info="INTRODUCING NEW"
            bgColor="yellow"
            textColor="text-white"
            mainColor="bg-gray900"
            url="./public/phone2.png"
          >
            *Data provided by internal laboratories. Industry measurment.
          </ProductInfo>
        </section>

        {/* <FeaturedProducts />  */}
      </section>
      <SubscribeNewsletter />
    </>
  );
};

export default Home;
