import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTime = createAsyncThunk(
  "placeSlice/fetchTime",
  async (placeMap = "Cario") => {
    try {
      const res = await axios.get(
        `https://api.aladhan.com/v1/timingsByCity/05-02-2025?country=EGY&city=${placeMap}`
      );
      return res.data;
    } catch (error) {
      console.log("this error in placeSlice", error);
      throw new Error(error);
    }
  }
);

const placeSlice = createSlice({
  name: "placeSlice",
  initialState: {
    data: [],
    loading: false,
    error: null,
    placeMap: "",
    country: "EGY",
  },

  reducers: {
    changeName: (stata, action) => {
      stata.placeMap = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTime.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTime.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTime.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
export const { changeName } = placeSlice.actions;
export default placeSlice.reducer;
