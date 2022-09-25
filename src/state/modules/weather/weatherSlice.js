import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "api";
import { localAuthenticate } from "utils/localAuth";

export const getWeatherToday = createAsyncThunk("weather", ({ onComplete }) => {
  return API.weather
    .getWeatherToday()
    .then(({ data }) => {
      onComplete(null, data);
      return data;
    })
    .catch((error) => {
      onComplete(error.response.data, null);
      throw new Error(error.response.data);
    });
});

export const getForecasts = createAsyncThunk(
  "forecasts",
  ({ start, limit, onComplete }) => {
    return API.weather
      .getForecasts(start, limit)
      .then(({ data }) => {
        onComplete(null, data);
        return data;
      })
      .catch((error) => {
        onComplete(error.response.data, null);
        throw new Error(error.response.data);
      });
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    authState: {
      ...localAuthenticate(),
    },
    getWeatherToday: {
      errors: {},
    },
    getForecasts: {
      errors: {},
    },
  },
  reducers: {
    localAuthenticate(state) {
      state.authState = localAuthenticate();
    },
  },
  extraReducers: {
    [getForecasts.rejected](state, action) {
      state.getForecasts.errors = action.error;
    },
    [getWeatherToday.rejected](state, action) {
      state.getWeatherToday.errors = action.error;
    },
  },
});

export const weatherActions = {
  ...weatherSlice.actions,
  getWeatherToday,
  getForecasts,
};

export default weatherActions.reducer;
