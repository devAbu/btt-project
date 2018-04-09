var express = require('express')
var app = express()

app.get('/', function (request, response) {
  response.send('abu first test')
})

app.listen(3000, function () {
  console.log('test listening')
})
