const incrementKey = (data, key) => (data[key] || 0) + 1

const analyticsLanguages = repos => {
  return repos.reduce((acc, { language }) => {
    const value = incrementKey(acc, language)
    return Object.assign({}, acc, { [language]: value })
  }, {})
}

module.exports = analyticsLanguages
