import { useProducts } from "@/hooks/useProducts";
import { TProduct } from "@/types";
import React from "react";

type TSmallCard = {
  product?: TProduct;
  productId?: string;
};

const SmallProductCard: React.FC<TSmallCard> = ({ product, productId }) => {
  // eger productId varsa get useProductdan hemin id -ye uygun producttu tap, yoxdursa ikinci paramentr false olacaq ve useProducts calisamayacaq
  const { data, isLoading } = useProducts(
    `https://clicon.onrender.com/api/v1/products${productId}`,
    !!productId
  );
  console.log("product", product);
  console.log("productId", productId);
  console.log("single product", data);
  // const price = product.productCount
  //   ? (
  //       product.productCount *
  //       (product.discountPercent
  //         ? product.salePrice -
  //           (product.salePrice * product.discountPercent) / 100
  //         : product.salePrice)
  //     ).toFixed(2)
  //   : 0;

  return (
    <article className="flex items-center p-3 gap-2.5 border rounded-[3px] border-gray-100">
      {/* <img
        src={product?.images[0]?.imageUrl}
        className="w-[80px] h-[80px] object-cover"
        alt="product photo"
      />
      <div className="flex flex-col">
        <h4 className="text-sm font-normal text-gray-900">{product.name}</h4>
        <h5 className="text-[14px] font-normal text-gray-900">
          {product.description}
        </h5>

        <div className="flex items-center gap-x-0.5">
          <span className="text-sm">{product.productCount}</span>×
          <span className="text-sm font-semibold text-secondary500">
            ₼ {price}
          </span>{" "}
        </div>
      </div> */}
    </article>
  );
};

export default SmallProductCard;
