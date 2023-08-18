import { configureStore } from "@reduxjs/toolkit";
import { movieListSlice } from "./features/movieListSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    [movieListSlice.name]: movieListSlice.reducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
