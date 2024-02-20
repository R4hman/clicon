import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TProduct } from "@/types";
import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import SelectComponent from "./reusable/SelectComponent";
import ReusableButton from "./reusable/ReusableButton";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { GoSync } from "react-icons/go";
import { useDispatch } from "react-redux";
import {
  decreaseProductCount,
  increaseProductCount,
} from "@/app/features/basketSlice";
import { useSelector } from "react-redux";
import {
  useProductByModal,
  useProducts,
  useSingleProduct,
} from "@/hooks/useProducts";
import { Link } from "react-router-dom";
import { RootState } from "@/app/store";
import ModalImage from "./ModalImage";
import { addOrRemoveCompare } from "@/app/features/compareSlice";

type TProductModal = {
  product: TProduct;
};

function hasProperties(obj: { [key: string]: string }): boolean {
  return Object.keys(obj).length > 0;
}

function stringForQuery(obj: { [key: string]: string }): string {
  let str = "";
  Object.entries(obj).forEach((key) => (str = str + `&${key[0]}=${key[1]}`));

  return str;
}

const ProductModal: FC<TProductModal> = ({ product }): ReactElement => {
  const [colorRadio, setColorRadio] = useState<string>("");

  const [productValues, setProductValues] = useState<Record<string, string>>(
    {}
  );

  const { data: singleProduct, isLoading: isProductLoading } = useSingleProduct(
    `https://clicon.onrender.com/api/v1/products/${product._id}`
  );

  let str = stringForQuery(productValues);
  str = str.replace("&", "?");
  str = `${product?.seriaNo}${str}`;

  const { data: productByModal, isLoading: productByModalLoading } =
    useProductByModal(`${str}`, hasProperties(productValues));

  const dispatch = useDispatch();
  const isRadioSelected = (value: string): boolean => colorRadio === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setColorRadio(e.currentTarget.value);

  const basket = useSelector((state: RootState) => state.basket.basket);
  const compare = useSelector((state: RootState) => state.compare.compare);
  const isInCompare = compare.find((item) => item._id === product._id);
  const productItemCount = basket.find(
    (item) => item._id === product._id
  )?.productCount;

  if (isProductLoading) {
    return <div>loading..</div>;
  }
  const images = productByModal
    ? productByModal.product?.images
    : product?.images;

  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <span className="z-20 text-black bg-white group hover:bg-primary500 w-8 h-8 flex items-center justify-center transition-all rounded-full">
          <MdOutlineRemoveRedEye className="text-black group-hover:text-white w-4 h-4" />
        </span>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-[4px]  max-w-[62.5rem] p-10 flex  gap-x-14">
        <ModalImage images={images} />
        <div className="flex-1 w-[500px]">
          <div className="flex items-center gap-x-2 mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar className="text-warning500" key={i} />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">
              {product.rate} Star Rating
            </span>
            <span className="text-sm font-normal text-gray600">
              (21,671 User feedback)
            </span>
          </div>
          <p className="font-normal text-[20px] leading-7">{product.name}</p>
          <div className="flex items-center justify-between">
            <span>Seriya:</span>
            <span
              className={`${
                product.stockStatus ? "text-[#2DB224]" : "text-red-500"
              }`}
            >
              {product.stockStatus ? "stokda var" : "bitib"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Brend: {product?.brandId?.name}</span>
            <span>Kateqoriya: {product?.categoryId?.name}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-secondary500 text-[24px] font-semibold leading-8">
              ₼ {product?.costPrice}
            </span>
            <span className="text-gray500 text-[18px] line-through font-normal">
              ₼ {product?.salePrice}
            </span>
            {/* <span>{product?.price}</span> */}
          </div>
          <div className="w-full h-[1.3px] my-6 bg-gray100"></div>
          <div className="flex justify-between  flex-wrap gap-6 mb-6">
            {/* <div>
              {product.colors?.map((color) => (
                <input
                  className="accent-green-500 focus:accent-red-500"
                  key={uuidv4()}
                  type="radio"
                  name="color-radio"
                  value={color}
                  checked={isRadioSelected(color)}
                  onChange={handleRadioClick}
                />
              ))}
            </div> */}
            {singleProduct?.commonFeatures.map((feature) => (
              <SelectComponent
                setProductValues={setProductValues}
                productValues={productValues}
                key={uuidv4()}
                title={feature.name}
                data={feature.options}
              />
            ))}
          </div>
          <div className="flex items-center gap-x-3">
            <div className="border border-gray-300 rounded-md p-3 flex items-center gap-x-4">
              <span
                className="text-[18px] cursor-pointer"
                onClick={() => dispatch(decreaseProductCount(product))}
              >
                -
              </span>
              <span className="text-[18px]">{productItemCount || 0} </span>
              <span
                className="text-[18px] cursor-pointer"
                onClick={() => dispatch(increaseProductCount(product))}
              >
                +
              </span>
            </div>
            <div className="w-[200px]">
              <ReusableButton textColor="text-white" bgColor={"bg-primary500"}>
                ADD TO CARD
                <SlBasket className="w-5 h-4" />
              </ReusableButton>
            </div>
            <div className="w-[200px]">
              <ReusableButton
                textColor="text-primary500"
                borderColor="border-primary500"
                bgColor={"bg-white"}
              >
                BUY NOW
              </ReusableButton>
            </div>
          </div>
          <div className="flex items-center gap-x-6 my-6">
            <div className="flex items-center gap-x-2 cursor-pointer transition-all hover:scale-105 hover:font-medium">
              <FaRegHeart />
              <span>Add to Wishlist</span>
            </div>
            <div>
              <div
                onClick={() => dispatch(addOrRemoveCompare(product))}
                className="flex items-center gap-x-2 cursor-pointer transition-all hover:scale-105 hover:font-medium"
              >
                <GoSync className="text-black" />
                {isInCompare ? "Remove from Compare" : "Add to Compare"}
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-[5px] p-4">
            <h6>100% Guarantee Safe Checkout</h6>
            <div className="flex items-center"></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
