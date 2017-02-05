'use stric'

const express = require('express')
const Service = require('./src/index')

const analytics = require('./src/analytics')

const app = express()
const PORT = process.env.PORT || 8000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/api', (req, res) => {
  const username = req.query.username

  const service = new Service()
  service.sendData(username)
    .then(analytics)
    .then(data => res.json(data))
    .then(err => {
      const { response = {} } = err
      if (response.status === 404) {
        throw new Error('user not found')
      }
      throw err
    })
})

app.listen(PORT, () => {
  console.log(`Express Server is listening on port: ${PORT}`)
})
