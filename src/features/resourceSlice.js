import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import {
  addResources,
  deleteResources,
  getResources,
} from "../service/service";

const resourceEntity = createEntityAdapter({
  selectId: (resource) => resource?.uuid,
});

const resourceSlice = createSlice({
  name: "resource",
  initialState: resourceEntity.getInitialState(),
  extraReducers: {
    [getResources.fulfilled]: (state, action) => {
      resourceEntity.setAll(state, action.payload);
    },

    [addResources.fulfilled]: (state, action) => {
      resourceEntity.addOne(state, action.payload);
    },
    [deleteResources.fulfilled]: (state, action) => {
      resourceEntity.removeOne(state, action.payload);
    },
  },
});

export const resourceSelectors = resourceEntity.getSelectors(
  (state) => state.resource
);
export default resourceSlice.reducer;
