import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TProduct } from "@/types";

type TInitialState = {
  basket: TProduct[];
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
        state.basket.push(action.payload);
      } else {
        // const index = state.basket.indexOf(id);
        state.basket = state.basket.filter((basket) => basket._id !== _id);
        // state.basket.splice(index, 1);
      }
    },
    // removeFavorites: (state, action: PayloadAction<{ id: string }>) => {
    //   const { id } = action.payload;
    //   const index = state.favorites.indexOf(id);
    //   if (index !== -1) {
    //     state.favorites.splice(index, 1);
    //   }
    // },
  },
});

export const { addOrRemoveBasket } = basketSlice.actions;
export const basket = (state: RootState) => state.basket.basket;

export default basketSlice.reducer;
