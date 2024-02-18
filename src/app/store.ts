import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favoriteSlice";
import basketReducer from "./features/basketSlice";
import compareReducer from "./features/compareSlice";
import userReducer from "./features/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  basket: basketReducer,
  compare: compareReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
