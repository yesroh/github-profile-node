const argv = require('argv')
const analytics = require('./analytics')
const loadStarreds = require('./loadStarreds')
const args = argv.option([{
  name: 'username',
  short: 'u',
  type: 'string',
  description: 'User name for analytics',
  example: "'script --username=value' or 'script -u value'"
}]).run()

const { username } = args.options

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
