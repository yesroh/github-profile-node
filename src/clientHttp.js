const axios = require('axios')
const config = require('./config')
const baseURL = 'https://api.github.com/'

module.exports = axios.create({ baseURL })
