const analyticsLanguages = data => {
  return data.reduce((acc, repo) => {
    if (acc[repo.language] === undefined) {
      acc[repo.language] = 1
    } else {
      acc[repo.language]++
    }

    return acc
  }, {})
}

module.exports = analyticsLanguages
