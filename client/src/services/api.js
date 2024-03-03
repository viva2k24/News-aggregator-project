import { config } from "../config/config";

const ApiService = {
  fetchArticles: async (category) => {
    try {
      const url =
        category === 'general' ? config.api.articles : config.api.articlesByCategory(category);
      
      const response = await fetch(url);
      console.log(response)

      if (!response.ok) {
        throw new Error(`Failed to fetch articles. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      // Handle errors gracefully
      console.error('Error in fetchArticles:', error);
      throw error; // Rethrow the error for the calling code to handle
    }
  },
};

export default ApiService;

