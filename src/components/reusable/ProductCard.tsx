import React from "react";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TProduct } from "@/types";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addOrRemoveFavorites } from "@/app/features/favoriteSlice";
import { addOrRemoveBasket } from "@/app/features/basketSlice";
import ProductModal from "../ProductModal";
import { RenderStars } from "./RenderStars";
import { RootState } from "@/app/store";
import { useAddBasket } from "@/hooks/basket/useAddBasket";
import { useLogin } from "@/hooks/auth/useLogin";
import { useSelector } from "react-redux";
import {
  Location,
  Navigation,
  useLocation,
  useNavigate,
} from "react-router-dom";

type TProductCard = {
  product: TProduct;
  main?: boolean;
};

const ProductCard: React.FC<TProductCard> = ({
  product,
  main,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const location: Location = useLocation();
  const navigate = useNavigate();
  const favs = useAppSelector((state: RootState) => state.favorites.favorites);
  const { mutate, isPending } = useAddBasket();

  const inFavorite: boolean = !!favs.filter((item) => item._id === product._id)
    .length;

  const handleAddFavorites = (product: TProduct): void => {
    dispatch(addOrRemoveFavorites(product));
  };
  const handleAddBasket = (data: TProduct): void => {
    mutate({ productId: data._id, count: 1 });
  };

  const handleNavigateProduct = (id: string): void => {
    if (location.pathname === "/shop") {
      navigate(`${id}`);
    }
  };

  return (
    <article
      onClick={() => handleNavigateProduct(product._id)}
      className={`p-4 ${
        main
          ? "max-w-[286px] "
          : "max-w-[286px] sm:max-w-[248px] flex-[1_1_228px] "
      }    border border-gray100`}
    >
      <div className="relative">
        <div className="group/item relative transition-all  hover:bg-gray-400/40 cursor-pointer hover:border hover:border-gray-100 group:hover:relative">
          <img
            className={`group-hover:bg-slate-200 w-[216px]
         object-cover relative -z-10 ${main ? "h-[200px]" : "h-[188px]"} `}
            src={product?.images[0]?.imageUrl}
            alt=""
          />
          <div className="invisible bg-transparent z-50  flex items-center gap-x-1 justify-center absolute inset-0 group-hover/item:visible  ">
            <span
              onClick={handleAddFavorites.bind(null, product)}
              className="z-20 text-black bg-white group hover:bg-primary500 w-8 h-8 flex items-center justify-center transition-all rounded-full"
            >
              {inFavorite ? (
                <FaHeart className="text-primary500 group-hover:text-white w-4 h-4" />
              ) : (
                <FaRegHeart className="text-black group-hover:text-white w-4 h-4" />
              )}
            </span>
            <span
              onClick={() => handleAddBasket(product)}
              className="z-20 text-black bg-white group hover:bg-primary500 w-8 h-8 flex items-center justify-center transition-all rounded-full"
            >
              <SlBasket className="text-black group-hover:text-white w-4 h-4" />
            </span>

            <ProductModal product={product} />
          </div>
        </div>
        {product.isHot && (
          <span className="bg-red-500 text-sm absolute top-9 p-1 text-white">
            HOT
          </span>
        )}
        {product.discountPercent ? (
          <span className="bg-warning500 text-sm absolute top-0 left-0 p-1">
            {product.discountPercent}% OFF
          </span>
        ) : (
          <span></span>
        )}
        {product.soldOut && (
          <span className="bg-gray300 text-white text-sm absolute top-0 left-0 p-1">
            SOLD OUT
          </span>
        )}
        <div className="flex items-center gap-x-2 my-4 ">
          {/* {product?.rate && (
            <span className="flex items-center gap-x-1">
              {Array.from({ length: product.rate }, (_, i) => (
                <FaStar className="text-warning500" key={i} />
              ))}
            </span>
          )} */}

          <span className="flex items-center gap-x-1">
            {Array.from({ length: 4 }, (_, i) => (
              <FaStar className="text-warning500" key={i} />
            ))}
          </span>

          {product.sellerCount ? (
            <span className="text-gray100 text-sm">
              ({product.sellerCount})
            </span>
          ) : (
            <span></span>
          )}
        </div>

        {product?.name && (
          <p
            className={`${
              main ? "text-[16px] leading-6 " : "text-xs"
            } font-normal text-gray900 `}
          >
            {product?.name}
          </p>
        )}
        <div>
          {product?.salePrice && (
            <span className="text-secondary500 my-3 font-semibold text-[18px]">
              ${product.salePrice}
            </span>
          )}
          {product?.discountPercent ||
            (product?.bestDiscountPercent && (
              <span className="text-secondary500 my-3 font-semibold text-[18px]">
                $
                {product.salePrice -
                  product.salePrice * product.discountPercent ||
                  product.bestDiscountPercent / 100}
              </span>
            ))}
        </div>
        {main && product?.description && (
          <p className="text-sm text-gray600 font-normal my-3 leading-5">
            {product.description}
          </p>
        )}
        {main && (
          <div className="flex my-10">
            <span className="z-20 text-black bg-primary100 group hover:bg-primary500 w-12 h-12 flex items-center justify-center transition-all ">
              <FaRegHeart className="text-black group-hover:text-white w-6 h-6" />
            </span>
            <button className="text-white bg-primary500  p-2.5 flex items-center gap-x-1">
              <SlBasket className="w-5 h-5" />
              <span className="text-sm font-bold ">ADD TO CART</span>
            </button>
            <span className="z-20 text-black bg-primary100 group hover:bg-primary500 w-12 h-12 flex items-center justify-center transition-all">
              <MdOutlineRemoveRedEye className="text-black group-hover:text-white w-6 h-6" />
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
