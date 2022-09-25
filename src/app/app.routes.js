import React from "react";

const routes = {
  home: {
    path: "/",
    component: React.lazy(() => import("pages/index")),
    exact: true,
  },
  //topics
  topics: {
    path: "/topics",
    component: React.lazy(() => import("pages/topics/Topics")),
    exact: true,
  },
  //weather
  weather: {
    path: "/weather",
    component: React.lazy(() => import("pages/weather-today/WeatherToday")),
    exact: true,
  },
  //search
  search: {
    path: "/search",
    component: React.lazy(() => import("pages/search/Search")),
    exact: true,
  },
  //forecasts
  forecasts: {
    path: "/forecasts",
    component: React.lazy(() => import("pages/forecasts/Forecasts")),
    exact: true,
  },
};

export default routes;
