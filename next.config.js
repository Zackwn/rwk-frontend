// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  inlineImageLimit: false,
  env: {
    API_URL: process.env.NODE_ENV === "production" ? "https://api-rwk.herokuapp.com" : "http://localhost:3333",
    REDDIT_APP_ID: process.env.REDDIT_APP_ID,
    REDDIT_APP_SECRET: process.env.REDDIT_APP_SECRET,
    REDDIT_AUTH_URL: 'https://www.reddit.com/api/v1/authorize',
    REDDIT_GET_TOKEN_URL: 'https://www.reddit.com/api/v1/access_token',
    REDDIT_REDIRECT_URL: process.env.NODE_ENV === "production" ? 'https://rwk.zackwn.vercel.app/auth/' : 'http://localhost:3000/auth/'
  },
})