var express = require('express')
var app = express()

// Step 1 MVP = 'hello world'
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
