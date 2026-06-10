import { VendorState } from "@/Types/vendors";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: VendorState = {
  vendors: null,
  loading: false,
  error: null,
};

export const getVendors = createAsyncThunk("Vendors/getVendors", async () => {
  const { data } = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/brands",
  );
  return data.data;
});

const VendorsSlice = createSlice({
  name: "Vendors",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getVendors.pending, (prevState) => {
      prevState.loading = true;
    });
    builder.addCase(getVendors.fulfilled, (prevState, action) => {
      prevState.loading = false;
      prevState.vendors = action.payload;
    });
    builder.addCase(getVendors.rejected, (prevState) => {
      prevState.loading = false;
    });
  },
});

export default VendorsSlice.reducer;
export const actions = VendorsSlice.actions;
