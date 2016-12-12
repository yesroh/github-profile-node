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
  .catch(err => {
    const { response = {} } = err
    if (response.status === 404) {
      throw new Error('user not found')
    }

    throw err
  })
