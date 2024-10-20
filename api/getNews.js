import api from "./client";
const getNews = () => {
  return api.get("/everything", {
    params: {
      q: "Vietnam",
      apiKey: "3c9d94cc124f4ac98085e65494516c3d"
    }
  });
};

const searchedNews = (str) => {
  return api.get("/everything", {
    params: {
      q : str,
      apiKey: "3c9d94cc124f4ac98085e65494516c3d"
    }
  });
};
export default {
  getNews,
  searchedNews,
};
