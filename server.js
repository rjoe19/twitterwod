// require modules
var express = require('express');
var Twitter = require('twitter');
var dotenv = require('dotenv');
var app = express(); // create an instance of express.



//Add in Middleware
//==============================================================================
// app.use(express.static('client'));




// Add in Routes
//==============================================================================
// Step 1 MVP = 'hello world', done.
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
//
app.listen(3000)


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
// //search query get request to twitter api.
//     twitterClient.get('search/tweets', {q: '%23wod', lang: 'en'}, function(err, tweet, response) {
//   		  if (err) {
// 					console.log("Error retrieving tweets my homie"); return
// 				}
//   		    console.log(returnTweets(tweet));
//   		});

// 		var params = {screen_name: 'nodejs'};
// twitterClient.get('search/tweets', {q:'%23wod', lang: 'en'}, function(error, tweets, response) {
// 	if (error) {
// 		console.log('ERROR RETRIEVING TWEETS', error);
// 	}
//   else  {
//     console.log(tweets, response);
//   }
// });


// twitterClient.get('https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4', {q:'%23haiku', lang: 'en'}, function(error, tweets, response) {
//   if(error) {
// 		console.log('cant get tweets', error);
// 	}
// 	else {
//   console.log('this is a tweet object', tweets);  // The favorites.
//   console.log('this is a response object', response);  // Raw response object.
// }
// });

var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey: 'JuGk3bf4UuKaumehSbnBwkJsf',
    consumerSecret: 'KlzkW3cVJmRReYBGIsdU9t7hM42Llxu7ZbL3deFTAN8Apq6AtO',
    callback: 'http://yoururl.tld/something'
});


// get request tokens
twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
    if (error) {
        console.log("Error getting OAuth request token : " + error);
    } else {
        //store token and tokenSecret somewhere, you'll need them later; redirect user
    }
});
