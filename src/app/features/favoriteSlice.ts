import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TInitialState = {
  favorites: string[];
};

const initialState: TInitialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addOrRemoveFavorites: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      if (!state.favorites.includes(id)) {
        state.favorites.push(id);
      } else {
        const index = state.favorites.indexOf(id);
        state.favorites.splice(index, 1);
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
