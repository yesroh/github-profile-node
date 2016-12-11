const analyticsLanguages = require('./languages')

module.exports = data => {
  const languages = analyticsLanguages(data)
  return { languages }
}
