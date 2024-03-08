import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TProduct } from "@/types";

type TOrder = {
  user: { [key: string]: string };
  order: { [key: string]: string };
};

const initialState: TOrder = {
  user: {},
  order: {},
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setUserOrder: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      console.log("name", name, value);
      state[name] = value;
    },
    removeUserOrder: (state) => {
      state.user = {};
      state.order = {};
    },
  },
});

export const { setUserOrder, removeUserOrder } = orderSlice.actions;
export const order = (state: RootState) => state.order;

export default orderSlice.reducer;
