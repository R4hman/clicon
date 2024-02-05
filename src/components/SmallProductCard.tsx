import { TProduct } from "@/types";
import React from "react";

type TSmallCard = {
  product: TProduct;
};

const SmallProductCard: React.FC<TSmallCard> = ({ product }) => {
  console.log("product", product);
  return (
    <article className="flex items-center p-3 gap-2.5 border rounded-[3px] border-gray-100">
      <img
        src={product?.images[0]?.imageUrl}
        className="w-[80px] h-[80px] object-cover"
        alt="product photo"
      />
      <div className="flex flex-col">
        <h4 className="text-sm font-normal text-gray-900">{product.name}</h4>
        {/* <h5 className="text-[14px] font-normal text-gray-900">
          {product.description}
        </h5> */}
        <span className="text-sm font-semibold text-secondary500">
          $
          {product.discountPercent
            ? product.salePrice -
              (product.salePrice * product.discountPercent) / 100
            : product.salePrice}
        </span>
      </div>
    </article>
  );
};

export default SmallProductCard;
