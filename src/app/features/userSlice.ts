import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TLoginUser } from "@/types";

type TInitialState = {
  user: TLoginUser | null;
};

const initialState: TInitialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TLoginUser>) => {
      state.user = { ...action.payload };
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const user = (state: RootState) => state.user;

export default userSlice.reducer;
