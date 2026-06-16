import { ProductState } from "@/Types/products";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ProductState = {
  products: [],
  productDetails: null,
  loading: false,
};

export const getProducts = createAsyncThunk(
  "Products/getProducts",
  async () => {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products",
    );
    return data.data;
  },
);

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (prevState) => {
      prevState.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (prevState, action) => {
      prevState.loading = false;
      prevState.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (prevState) => {
      prevState.loading = false;
    });
  },
});
export default ProductSlice.reducer;
export const actions = ProductSlice.actions;
