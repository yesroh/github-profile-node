const analytics = require('./analytics')
const loadStarreds = require('./loadStarreds')

const username = process.argv[2]

if (username === undefined) {
  throw new Error('need a valid username')
}

loadStarreds(username)
  .then(analytics)
  .then(data => {
    console.log(data)
  })
