import apiClient from "./apiClient";

const url = "/news";

const getNewNews = (start, limit) => {
  return apiClient.get(`${url}?start=${start}&limit=${limit}`);
};

const getTopicNews = (start, limit, id) => {
  return apiClient.get(`${url}/topic/${id}?start=${start}&limit=${limit}`);
};

const getSearchNews = (key) => {
  return apiClient.get(`${url}/search?searchKey=${key}`);
};

const newsAPI = {
  getNewNews,
  getTopicNews,
  getSearchNews,
};

export default newsAPI;
