import { CategoryState } from "@/Types/categories";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const {data} = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories",
    );
    return data.data;
  },
);

const initialState: CategoryState = {
  categories: null,
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
  },
});

export default categoriesSlice.reducer;
export const actions = categoriesSlice.actions;
