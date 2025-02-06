import { configureStore } from "@reduxjs/toolkit";
import placeSlice from "./PlaceSlice";
import nextPraySlice from "./NextPraySlice";
const store = configureStore({
  reducer: {
    place: placeSlice,
    nextPray: nextPraySlice,
  },
});

export default store;
