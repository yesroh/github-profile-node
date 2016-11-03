const axios = require('axios')
const config = require('./config')
const baseURL = 'https://api.github.com/'
const headers = {
  Authorization: `token ${config.GITHUB_OAUTH_TOKEN}`
}

module.exports = axios.create({ baseURL, headers })
