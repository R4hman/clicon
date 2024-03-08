import React from "react";
import DealsEnd from "./DealsEnd";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "./reusable/ProductCard";
import { v4 as uudidv4 } from "uuid";
import { TProduct } from "@/types";
import { useProducts } from "@/hooks/useProducts";
import SpesificProductSkeleton from "./Skeletons/SpesificProductSkeleton";

// const products: TProduct[] = [
//   {
//     id: uudidv4(),
//     title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
//     price: 100,
//     description:
//       "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
//     img: ["public/cnsl.png", "public/drone.png", "public/drone.png"],
//     soldOut: false,
//     discount: 19,
//     hot: true,
//     rating: 5,
//     votes: 656,
//   },
//   {
//     id: uudidv4(),
//     title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
//     price: 100,
//     img: ["public/drone.png", "public/drone.png", "public/drone.png"],
//     soldOut: true,
//     discount: null,
//     hot: false,
//     rating: 5,
//     votes: 656,
//   },
//   {
//     id: uudidv4(),
//     title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
//     price: 100,
//     description:
//       "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
//     img: ["public/drone.png", "public/drone.png", "public/drone.png"],
//     soldOut: false,
//     discount: 19,
//     hot: true,
//     rating: 5,
//     votes: 656,
//   },
//   {
//     id: uudidv4(),
//     title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
//     price: 100,
//     img: ["public/drone.png", "public/drone.png", "public/drone.png"],
//     soldOut: true,
//     discount: null,
//     hot: false,
//     rating: 5,
//     votes: 656,
//   },
//   {
//     id: uudidv4(),
//     title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
//     price: 100,
//     description:
//       "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
//     img: ["public/drone.png", "public/drone.png", "public/drone.png"],
//     soldOut: false,
//     discount: 19,
//     hot: true,
//     rating: 5,
//     votes: 656,
//   },
//   {
//     id: uudidv4(),
//     title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
//     price: 100,
//     img: ["public/drone.png", "public/drone.png", "public/drone.png"],
//     soldOut: true,
//     discount: null,
//     hot: false,
//     rating: 5,
//     votes: 656,
//   },
//   {
//     id: uudidv4(),
//     title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
//     price: 100,
//     description:
//       "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
//     img: ["public/drone.png", "public/drone.png", "public/drone.png"],
//     soldOut: false,
//     discount: 19,
//     hot: true,
//     rating: 5,
//     votes: 656,
//   },
//   {
//     id: uudidv4(),
//     title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
//     price: 100,
//     img: ["public/drone.png", "public/drone.png", "public/drone.png"],
//     soldOut: true,
//     discount: null,
//     hot: false,
//     rating: 5,
//     votes: 656,
//   },
// ];

const BestDeals: React.FC = () => {
  const { data, isLoading } = useProducts(
    "https://clicon.onrender.com/api/v1/products/best/deals"
  );

  if (isLoading) {
    return <SpesificProductSkeleton />;
  }

  return (
    <section className="mt-[72px] mb-6 px-6 flex flex-col  items-center justify-center  xl:px-0">
      <div className="flex items-center w-full justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-x-2  ">
          <h4 className="text-[24px] font-semibold">Best Deals</h4>
          <DealsEnd />
        </div>
        <Link
          className="text-secondary500 text-sm flex items-center gap-x-2"
          to="/shop"
        >
          Browse all products
          <FaArrowRight />
        </Link>
      </div>
      <main className=" border border-gray100 w-[286px] md:w-fit   mt-6">
        <div className="flex flex-col xl:flex-row w-fit ">
          <div className="sm:hidden xl:block w-fit">
            <ProductCard main product={data?.products?.[0]} />
          </div>
          <div className="flex w-fit items-center content-start justify-center flex-wrap">
            {data?.products?.slice(0, 8)?.map((item: TProduct) => (
              <ProductCard key={uudidv4()} product={item} />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default BestDeals;
