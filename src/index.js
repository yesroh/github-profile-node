const axios = require('axios')

axios.get('https://api.github.com/users/vinicius73')
 .then(response => response.data)
 .then(data => {
   console.log(data)
 })
