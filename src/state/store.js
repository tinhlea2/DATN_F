import { configureStore } from "@reduxjs/toolkit";
import ThemeOptionsReducer from "./modules/themeOptions/ThemeOptions";

export default configureStore({
  reducer: {
    themeOptions: ThemeOptionsReducer,
  },
});
