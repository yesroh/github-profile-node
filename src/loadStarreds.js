const http = require('./clientHttp')
const paginatonParser = require('github-pagination-parser')

const loadStarreds = (username, page = 1, acc = []) => {
  const params = { per_page: 100, page }
  const path = `/users/${username}/starred`;
  return http.get(path, { params })
    .then(({ data, headers }) => {
      const link = paginatonParser(headers.link)
      if (link.next !== undefined) {
        return loadStarreds(username, link.next, [...acc, ...data])
      }

      return [...acc, ...data]
    })
};

module.exports = loadStarreds;
