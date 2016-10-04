// require modules
var express = require('express');
var Twitter = require('twitter');
var dotenv = require('dotenv');
var app = express // create an instance of express.



//Add in Middleware
//==============================================================================
// app.use(express.static('client'));




// Add in Routes
//==============================================================================
// Step 1 MVP = 'hello world'
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
//
// app.listen(3000)


//load environmental variables:
dotenv.load();
// console.log(process.env.TWITTER_API_KEY)
// console.log(process.env.TWITTER_API_SECRET)
// console.log(process.env.TWITTER_ACCESS_TOKEN)
// console.log(process.env.TWITTER_TOKEN_SECRET)
// successfully logs all keys/secrets/tokens from .env file for testing purposes


// setup twitter API client call:
var twitterClient = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
	  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
	  access_token_secret: process.env.TWITTER_ACCESS_SECRET
	})

//search query get request to twitter api.
    twitterClient.get('search/tweets', {q: '#wod', lang: 'en'}, function(err, tweet, response) {
  		  if (err) { console.log("Error retrieving tweets"); return }
  		    console.log(returnTweets(tweet));
  });
