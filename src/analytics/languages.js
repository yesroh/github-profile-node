const incrementKey = (data, key) => (data[key] || 0) + 1

const analyticsLanguages = repos => {
  return repos.reduce((acc, { language }) => {
    return Object.assign({}, acc, { [language]: incrementKey(acc, language) })
  }, {})
}

module.exports = analyticsLanguages
