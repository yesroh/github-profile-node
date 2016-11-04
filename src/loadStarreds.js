const http = require('./clientHttp')

const params = { per_page: 100, page: 1 }

const loadStarreds = username => http.get(`/users/${username}/starred`, { params });

module.exports = loadStarreds;
