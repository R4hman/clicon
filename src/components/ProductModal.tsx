import React, { useEffect, useState } from "react";
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

type TProductModal = {
  product: TProduct;
};

const ProductModal: React.FC<TProductModal> = ({ product }) => {
  const [colorRadio, setColorRadio] = useState<string>("");
  const [productValues, setProductValues] = useState<Record<string, string>>(
    {}
  );
  const isRadioSelected = (value: string): boolean => colorRadio === value;
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setColorRadio(e.currentTarget.value);

  console.log("productValues", productValues);

  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <span className="z-20 text-black bg-white group hover:bg-primary500 w-8 h-8 flex items-center justify-center transition-all rounded-full">
          <MdOutlineRemoveRedEye className="text-black group-hover:text-white w-4 h-4" />
        </span>
      </DialogTrigger>
      <DialogContent className="bg-white rounded-[4px]  max-w-[62.5rem] p-10 flex  gap-x-14">
        <div className="flex flex-1 w-[500px] bg-red-800 flex-col gap-y-6">
          <img style={{ width: "600px" }} src="./public/laptop.png" alt="" />
          eaea
        </div>
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
            <span>Brend: {product.brandId.name}</span>
            <span>Kateqoriya: {product?.categoryId.name}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-secondary500 text-[24px] font-semibold leading-8">
              ₼ {product.costPrice}
            </span>
            <span className="text-gray500 text-[18px] line-through font-normal">
              ₼ {product?.salePrice}
            </span>
            {/* <span>{product?.price}</span> */}
          </div>
          <div className="w-full h-[1.3px] my-6 bg-gray100"></div>
          <div className="flex justify-between  flex-wrap">
            <div>
              <span>Color</span>
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
            </div>
            {product.features.map((feature) => (
              <SelectComponent
                setProductValues={setProductValues}
                productValues={productValues}
                key={uuidv4()}
                title={feature.name}
                data={[feature.option]}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
