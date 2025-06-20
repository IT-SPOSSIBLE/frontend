import axios from "axios";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { MotocycleImage } from "../images/ImageTypes";

import { API_ENDPOINTS } from "../../../api/endpoints";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface ImageState {
  images: MotocycleImage[];
  loading: boolean;
  error: string | null;
}
const initialState: ImageState = {
  images: [],
  loading: false,
  error: null,
};

export const fetchImages = createAsyncThunk<MotocycleImage[], number>(
  "images/fetchImagesByProductId",
  async (productId) => {
    const res = await axios.get<MotocycleImage[]>(
      `${API_BASE_URL}${API_ENDPOINTS.images.list}?product=${productId}`
    );
    return res.data;
  }
);


const imageSlice = createSlice({
    name:'images',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchImages.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchImages.fulfilled, (state, action) => {
            state.loading = false;
            state.images = action.payload;
        })
        .addCase(fetchImages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? "Failed to fetch images";
        }
        );
    }
})

export default imageSlice.reducer;