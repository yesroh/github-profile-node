const analyticsLanguages = require('./languages')

module.exports = repos => {
  const languages = analyticsLanguages(repos)
  return { languages }
}
