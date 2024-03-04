import {
  decreaseProductCount,
  increaseProductCount,
} from "@/app/features/basketSlice";
import { RootState } from "@/app/store";
import { useDeleteBasket } from "@/hooks/basket/useDeleteBasket";
import { TProduct } from "@/types";
import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

type TIncreaseDecreaseBtn = {
  product: TProduct;
  handleMutateBasket?: (item, key: string) => void;
};

const IncreaseDecreaseBtn: FC<TIncreaseDecreaseBtn> = ({
  product,
  handleMutateBasket,
}): ReactElement => {
  return (
    <div className="border border-gray-300 w-[88px] rounded-md p-3 flex items-center gap-x-4">
      <span
        className="text-[18px] cursor-pointer"
        // onClick={() => dispatch(decreaseProductCount(product))}
        onClick={() => handleMutateBasket(product, "decrement")}
      >
        -
      </span>
      <span className="text-[18px]">{product?.count || 0} </span>
      <span
        className="text-[18px] cursor-pointer"
        // onClick={() => dispatch(increaseProductCount(product))}
        onClick={() => handleMutateBasket(product, "increment")}
      >
        +
      </span>
    </div>
  );
};

export default IncreaseDecreaseBtn;
