const API_URL = "https://news-aggregator-project.onrender.com"

export const config = {
  api: {
    articles: `${API_URL}/news/`,
    articlesByCategory: (category) => `${API_URL}/news/${category}`,
  },
};
