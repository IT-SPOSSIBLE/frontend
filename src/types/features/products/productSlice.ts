import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "./productType";
import { API_ENDPOINTS } from "../../../api/endpoints";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
interface ProductState {
  product: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  product: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const res = await axios.get<Product[]>(
      `${API_BASE_URL}${API_ENDPOINTS.products.list}`
    );
    console.log("Fetched products:", res.data);
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "failed to fetch the products";
      });
  },
});

export default productSlice.reducer;
