// require modules
var express = require('express')
var app = express()


//Add in Middleware
//==============================================================================
app.use(express.static('client'));




// Add in Routes
//==============================================================================
// Step 1 MVP = 'hello world'
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
