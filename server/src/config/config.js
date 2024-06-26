require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
  pageSize: 100,
  language: 'en',
  newsApiUrl: 'https://newsapi.org/v2/everything?q=tesla&from=2024-02-03&sortBy=publishedAt&apiKey=7745f1c43cfa4349ad67dc6ed6d8e282',
  apiKey: process.env.NEWS_API_KEY,
  updateFrequency: {
    hour: process.env.UPDATE_FREQUENCY_HOURS,
    minute: process.env.UPDATE_FREQUENCY_MINUTES
  }
};
