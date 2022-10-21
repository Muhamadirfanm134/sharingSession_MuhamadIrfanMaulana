import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getLocations } from "../service/service";

const locationEntity = createEntityAdapter({
  selectId: (location) => location?.city,
});

const locationSlice = createSlice({
  name: "location",
  initialState: locationEntity.getInitialState(),
  extraReducers: {
    [getLocations.fulfilled]: (state, action) => {
      locationEntity.setAll(state, action.payload);
    },
  },
});

export const locationSelectors = locationEntity.getSelectors(
  (state) => state.location
);
export default locationSlice.reducer;
