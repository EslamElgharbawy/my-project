import { CategoryState } from "@/Types/categories";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories",
    );
    return data.data;
  },
);
export const getSubCategories = createAsyncThunk(
  "subcategories/getSubCategories",
  async (categoryId: string) => {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`,
    );
    return data.data;
  },
);

const initialState: CategoryState = {
  categories: null,
  subCategories: null,
  loading: false,
};

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (prevState) => {
      prevState.loading = true;
    });

    builder.addCase(getCategories.fulfilled, (prevState, action) => {
      prevState.loading = false;
      prevState.categories = action.payload;
    });

    builder.addCase(getCategories.rejected, (prevState) => {
      prevState.loading = false;
    });

    builder.addCase(getSubCategories.pending, (prevState) => {
      prevState.loading = true;
    });

    builder.addCase(getSubCategories.fulfilled, (prevState, action) => {
      prevState.loading = false;
      prevState.subCategories = action.payload;
    });

    builder.addCase(getSubCategories.rejected, (prevState) => {
      prevState.loading = false;
    });
  },
});
export default categoriesSlice.reducer;
export const actions = categoriesSlice.actions;
