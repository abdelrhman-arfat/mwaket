import { createSlice } from "@reduxjs/toolkit";

const nextPraySlice = createSlice({
  name: "nextPraySlice",
  initialState: {
    next: "",
    time: "",
  },
  reducers: {
    setNextPray: (state, action) => {
      state.next = action.payload.next;
      state.time = action.payload.time;
    },
  },
});

export const { setNextPray } = nextPraySlice.actions;
export default nextPraySlice.reducer;
