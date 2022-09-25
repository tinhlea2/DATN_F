import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "api";
import { localAuthenticate } from "utils/localAuth";

export const getNewNews = createAsyncThunk(
  "news",
  ({ start, limit, onComplete }) => {
    return API.news
      .getNewNews(start, limit)
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

export const getTopicNews = createAsyncThunk(
  "topics-news",
  ({ id, start, limit, onComplete }) => {
    return API.news
      .getTopicNews(start, limit, id)
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

export const getSearchNews = createAsyncThunk(
  "search-news",
  ({ key, onComplete }) => {
    return API.news
      .getSearchNews(key)
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

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    authState: {
      ...localAuthenticate(),
    },
    getNewNews: {
      errors: {},
    },
    getTopicNews: {
      errors: {},
    },
    getSearchNews: {
      errors: {},
    },
  },
  reducers: {
    localAuthenticate(state) {
      state.authState = localAuthenticate();
    },
  },
  extraReducers: {
    [getNewNews.rejected](state, action) {
      state.getNewNews.errors = action.error;
    },
    [getTopicNews.rejected](state, action) {
      state.getTopicNews.errors = action.error;
    },
    [getSearchNews.rejected](state, action) {
      state.getSearchNews.errors = action.error;
    },
  },
});

export const newsActions = {
  ...newsSlice.actions,
  getNewNews,
  getTopicNews,
  getSearchNews,
};

export default newsActions.reducer;
