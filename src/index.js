const http = require('./clientHttp')

http.get('/users/hernandev')
 .then(response => response.data)
 .then(data => {
   console.log(data)
 })
