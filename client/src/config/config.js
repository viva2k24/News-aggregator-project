const API_URL = "http://localhost:4000";

export const config = {
  api: {
    articles: `${API_URL}/news/`,
    articlesByCategory: (category) => `${API_URL}/news/${category}`,
  },
};
