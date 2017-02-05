const loadStarreds = require('./loadStarreds')

const Analytics = function () {

}

Analytics.prototype.sendData = username => {
  if (username === undefined) {
    throw new Error('need a valid username')
  }
  return loadStarreds(username)
}

module.exports = Analytics
