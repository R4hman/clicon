import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TProduct } from "@/types";

type TInitialState = {
  favorites: TProduct[];
};

const initialState: TInitialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addOrRemoveFavorites: (state, action: PayloadAction<TProduct>) => {
      const { _id } = action.payload;

      const item = state.favorites.find((fav) => fav._id === _id);

      if (!item) {
        state.favorites.push(action.payload);
      } else {
        // const index = state.favorites.indexOf(_id);
        // state.favorites.splice(index, 1);
        state.favorites = state.favorites.filter((fav) => fav._id !== _id);
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

export const { addOrRemoveFavorites } = favoritesSlice.actions;
export const favorites = (state: RootState) => state.favorites.favorites;

export default favoritesSlice.reducer;
