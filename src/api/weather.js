import apiClient from "./apiClient";

const url = "/weather";

const getWeatherToday = () => {
  return apiClient.get(`${url}`);
};

const getForecasts = (start, limit) => {
  return apiClient.get(`${url}/forecast?start=${start}&limit=${limit}`);
};

const weatherAPI = {
  getWeatherToday,
  getForecasts,
};

export default weatherAPI;
