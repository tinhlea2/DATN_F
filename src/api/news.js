import apiClient from "./apiClient";

const url = "/news";

const getNewNews = async (numpage) => {
  return apiClient.get(`${url}?page=${numpage}`);
};

const getlistTopicNews = async () => {
  return apiClient.get(`/topic`);
};

const getTopicNews = async (id) => {
  return apiClient.get(`/topic/${id}`);
};

const getSearchNews = (key) => {
  return apiClient.get(`/search?search=${key}`);
};

const newsAPI = {
  getNewNews,
  getTopicNews,
  getSearchNews,
  getlistTopicNews
};

export default newsAPI;
