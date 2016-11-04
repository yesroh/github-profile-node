const http = require('./clientHttp')

const loadStarreds = (username, page = 1) => {
  const params = { per_page: 100, page }
  const path = `/users/${username}/starred`;
  return http.get(path, { params })
};

module.exports = loadStarreds;
