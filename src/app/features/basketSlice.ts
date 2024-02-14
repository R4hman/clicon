import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TProduct } from "@/types";

type TBasketType = TProduct & {
  productCount: number;
};

type TInitialState = {
  basket: TBasketType[];
};

const initialState: TInitialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addOrRemoveBasket: (state, action: PayloadAction<TProduct>) => {
      const { _id } = action.payload;
      const item = state.basket.find((basket) => basket._id === _id);
      if (!item) {
        state.basket.push({ ...action.payload, productCount: 1 });
      } else {
        // const index = state.basket.indexOf(id);
        state.basket = state.basket.filter((basket) => basket._id !== _id);
        // state.basket.splice(index, 1);
      }
    },
    // increaseProductCount: (state, action: PayloadAction<TProduct>) => {
    //   const { _id } = action.payload;
    //   const item = state.basket.find((basket) => basket._id === _id);
    //   if (!item) {
    //     state.basket.push({ ...action.payload, productCount: 1 });
    //   } else {
    //     // const index = state.basket.indexOf(id);
    //     const newObj = { ...item, productCount: item.productCount + 1 };
    //     state.basket = state.basket.filter((basket) => basket._id !== _id);
    //     state.basket.push(newObj);
    //   }
    // },
    increaseProductCount: (state, action: PayloadAction<TProduct>) => {
      const { _id } = action.payload;
      const existingItem = state.basket.find((basket) => basket._id === _id);

      if (!existingItem) {
        state.basket.push({ ...action.payload, productCount: 1 });
      } else {
        const updatedBasket = state.basket.map((item) =>
          item._id === _id
            ? { ...item, productCount: item.productCount + 1 }
            : item
        );

        state.basket = updatedBasket;
      }
    },
    decreaseProductCount: (state, action: PayloadAction<TProduct>) => {
      const { _id } = action.payload;
      const existingItem = state.basket.find((basket) => basket._id === _id);
      if (existingItem?.productCount === 1) {
        state.basket = state.basket.filter((basket) => basket._id !== _id);
      }
      if (existingItem && existingItem.productCount > 0) {
        const updatedBasket = state.basket.map((item) =>
          item._id === _id
            ? { ...item, productCount: item.productCount - 1 }
            : item
        );

        state.basket = updatedBasket;
      }
    },
    // decreaseProductCount: (state, action: PayloadAction<TProduct>) => {
    //   const { _id } = action.payload;
    //   const item = state.basket.find((basket) => basket._id === _id);
    //   if (item && item.productCount > 0) {
    //     const newObj = {
    //       ...item,
    //       productCount: item.productCount - 1,
    //     };
    //     state.basket = state.basket.filter((basket) => basket._id !== _id);
    //     state.basket.push(newObj);
    //   }
    //   if (item?.productCount === 1) {
    //     state.basket = state.basket.filter((basket) => basket._id !== _id);
    //   }
    // },
    // removeFavorites: (state, action: PayloadAction<{ id: string }>) => {
    //   const { id } = action.payload;
    //   const index = state.favorites.indexOf(id);
    //   if (index !== -1) {
    //     state.favorites.splice(index, 1);
    //   }
    // },
  },
});

export const { addOrRemoveBasket, increaseProductCount, decreaseProductCount } =
  basketSlice.actions;
export const basket = (state: RootState) => state.basket.basket;

export default basketSlice.reducer;
