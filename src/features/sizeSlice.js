import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getSizes } from "../service/service";

const sizeEntity = createEntityAdapter({
  selectId: (size) => size?.size,
});

const sizeSlice = createSlice({
  name: "size",
  initialState: sizeEntity.getInitialState(),
  extraReducers: {
    [getSizes.fulfilled]: (state, action) => {
      sizeEntity.setAll(state, action.payload);
    },
  },
});

export const sizeSelectors = sizeEntity.getSelectors((state) => state.size);
export default sizeSlice.reducer;
