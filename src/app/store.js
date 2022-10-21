import { configureStore } from "@reduxjs/toolkit";
import resourceReducer from "../features/resourceSlice";
import locationReducer from "../features/locationSlice";
import sizeReducer from "../features/sizeSlice";

export const store = configureStore({
  reducer: {
    resource: resourceReducer,
    location: locationReducer,
    size: sizeReducer,
  },
});
