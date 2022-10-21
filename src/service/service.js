import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `https://api.steinhq.com/v1/storages/6351fa10d27cdd09f0c5f80f`;

export const getResources = createAsyncThunk(
  "resources/getResources",
  async () => {
    const response = await axios({
      method: "GET",
      url: `${API_URL}/list`,
    });

    return response.data;
  }
);

export const getResourcesById = createAsyncThunk(
  "resources/getResourcesById",
  async (values) => {
    const response = await axios({
      method: "GET",
      url: `${API_URL}/list`,
      data: JSON.stringify(values),
    });

    return response.data;
  }
);

export const addResources = createAsyncThunk(
  "resources/addResources",
  async (values) => {
    const response = await axios({
      method: "POST",
      url: `${API_URL}/list`,
      data: JSON.stringify(values),
    });

    return response.data;
  }
);

export const editResources = createAsyncThunk(
  "resources/editResources",
  async (values) => {
    const response = await axios({
      method: "PUT",
      url: `${API_URL}/list`,
      data: JSON.stringify(values),
    });

    return response.data;
  }
);

export const deleteResources = createAsyncThunk(
  "resources/deleteResources",
  async (values) => {
    const response = await axios({
      method: "DELETE",
      url: `${API_URL}/list`,
      data: JSON.stringify(values),
    });

    return response.data;
  }
);

export const getLocations = createAsyncThunk(
  "locations/getLocations",
  async () => {
    const response = await axios({
      method: "GET",
      url: `${API_URL}/option_area`,
    });

    return response.data;
  }
);

export const getSizes = createAsyncThunk("sizes/getSizes", async () => {
  const response = await axios({
    method: "GET",
    url: `${API_URL}/option_stock`,
  });

  return response.data;
});
