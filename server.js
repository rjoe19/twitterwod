// require modules
var express = require('express');
var twitter = require('twitter');
var app = express // create an instance of express.



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


// setup twitter API call:
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
