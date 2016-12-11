const analytics = require('./analytics')
const loadStarreds = require('./loadStarreds')

loadStarreds('vedovelli')
  .then(analytics)
  .then(data => {
    console.log(data)
  })
