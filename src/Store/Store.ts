import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/Features/user.slice";
import ProductSlice from "@/Features/Product.slice";
import VendorsSlice from "@/Features/Vendors.slice";
export const Store = configureStore({
  reducer: {
    user: userReducer,
    ProductSlice,
    VendorsSlice,
  },
});
type AppStore = typeof Store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];


