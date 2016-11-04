const loadStarreds = require('./loadStarreds')

loadStarreds('vedovelli')
 .then(response => {
   console.log(response.data.length);
  //  console.log(response.headers);
 })
 // .then(data => {
 //   console.log(data.length)
 // })
