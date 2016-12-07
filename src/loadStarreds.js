const http = require('./clientHttp')
const paginatonParser = require('github-pagination-parser')

const loadStarreds = (username, page = 1, acc = []) => {
  const params = { per_page: 100, page }
  const path = `/users/${username}/starred`
  return http.get(path, { params }).then(response => processResponse(response, username, acc))
}

const processResponse = ({ data, headers }, username, acc) => {
  const link = paginatonParser(headers.link)
  const newData = [...acc, ...data]
  if (link.next !== undefined) {
    return loadStarreds(username, link.next, newData)
  }

  return newData
}

module.exports = loadStarreds
