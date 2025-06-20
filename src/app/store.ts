import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../types/features/products/productSlice";
import imageReducer from "../types/features/images/imageSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    images: imageReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
