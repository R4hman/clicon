import {
  decreaseProductCount,
  increaseProductCount,
} from "@/app/features/basketSlice";
import { RootState } from "@/app/store";
import { TProduct } from "@/types";
import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

type TIncreaseDecreaseBtn = {
  product: TProduct;
};

const IncreaseDecreaseBtn: FC<TIncreaseDecreaseBtn> = ({
  product,
}): ReactElement => {
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basket.basket);
  const productItemCount = basket.find(
    (item) => item._id === product._id
  )?.productCount;
  return (
    <div className="border border-gray-300 w-[88px] rounded-md p-3 flex items-center gap-x-4">
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
  );
};

export default IncreaseDecreaseBtn;
