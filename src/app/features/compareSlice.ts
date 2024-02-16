import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TProduct } from "@/types";

type TCompareType = TProduct;

type TInitialState = {
  compare: TCompareType[];
};

const initialState: TInitialState = {
  compare: [],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addOrRemoveCompare: (state, action: PayloadAction<TProduct>) => {
      const { _id } = action.payload;
      const item = state.compare.find((compare) => compare._id === _id);
      if (!item) {
        state.compare.push(action.payload);
      } else {
        // const index = state.basket.indexOf(id);
        state.compare = state.compare.filter((compare) => compare._id !== _id);
        // state.basket.splice(index, 1);
      }
    },
  },
});

export const { addOrRemoveCompare } = compareSlice.actions;
export const compare = (state: RootState) => state.compare.compare;

export default compareSlice.reducer;
